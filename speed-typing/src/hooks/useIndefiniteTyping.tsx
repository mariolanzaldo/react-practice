import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import testCalculator from "../utils/testCalculator";
import { useAppContext } from "../state";
import { setCurrentStats } from "../state/actions";
import testAccuracy from "../utils/testAccuracy";
import useParagraph from "./useParagraph";
import { saveStat } from "../utils/db/asyncHelper";
import { GameStat } from "../state/reducers";

interface UseTypingTest {
    text: string;
}

function useIndefiniteTyping ({ text }: UseTypingTest) {
    const [appState, dispatch ] = useAppContext();
    const { accuracy: acc, mistakes, wpm, maxWpm } = appState.game;
    const { paragraph, regenerateParagraph } = useParagraph({ text });



    // eslint-disable-next-line
    const [word, setWord] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const [time, setTime ] = useState(0);
    const [isBackspaceEnabled, setIsBackspaceEnabled] = useState(true);

    const inputRef = useRef<HTMLInputElement | null>(null);
    const totalChars = useRef(0);
    const totalCorrectChars = useRef(0);
    const timer = useRef<NodeJS.Timeout | null>(null);
    const startTime = useRef<Date | null>(null);

    const handleRestart = useCallback(() => {
        clearTimeout(timer.current!);
        regenerateParagraph();
        setWord('');
        setCharIndex(0);
        setTime(0);
        totalChars.current = 0;
        totalCorrectChars.current = 0;
        timer.current = null;
        startTime.current = null;
        dispatch(setCurrentStats({
            value: {
                date: null,
                mistakes: 0,
                wpm: 0,
                maxWpm: 0,
                accuracy: 0,
                isGameover: false,
            }
        }));
    }, [dispatch]);

    const handleInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        let newMaxWpm = 0;
        const { value } = event.target;

        if(value.length >= paragraph.length) {
            clearTimeout(timer.current!);

            const  timestamp = Date.now();

            const stats = {
                date: timestamp,
                username: appState.currentUser?.username,
                mistakes,
                wpm,
                maxWpm,
                accuracy: acc,
                isGameover: true,
            }

            saveStat(stats as GameStat);


            dispatch(setCurrentStats({
                value: stats,
            }));

            return;
        }

        if(!isBackspaceEnabled && (event.nativeEvent as InputEvent).inputType === 'deleteContentBackward') {
            event.preventDefault();
            return;
        }

        setWord(value);
        setCharIndex(value.length);

        if(!startTime.current) {
            startTime.current = new Date();
        }

        const currentTime = new Date();
        const timeElapsed = (currentTime.getTime() - startTime.current.getTime()) / 1000;

        const { mistakes: calcMistakes , wpm: calcWpm, maxWpm: calcMaxWpm } = testCalculator(paragraph, value, timeElapsed, timeElapsed);
        
        if(calcMaxWpm > maxWpm!) {
            newMaxWpm = calcMaxWpm;
        }

        const calcAcc = testAccuracy(value, paragraph, charIndex, totalChars, totalCorrectChars);

        dispatch(setCurrentStats({
            value: {
                date: null,
                mistakes: calcMistakes,
                wpm: calcWpm,
                maxWpm: newMaxWpm,
                accuracy: calcAcc,
                isGameover: false,
            }
        }));

        if(!timer.current) {
            timer.current = setTimeout(() => setTime(t => t + 1), 1000);
        }
    // eslint-disable-next-line
    }, [time, paragraph, dispatch, mistakes, wpm, acc, isBackspaceEnabled, maxWpm]);

    const handleDisableBackspace = useCallback(() => {
        setIsBackspaceEnabled(!isBackspaceEnabled);
    // eslint-disable-next-line
    }, []);

    useEffect(() => {
        const focusInput = () => {
            if(inputRef.current) {
                inputRef.current.focus();
            }
        };

        document.addEventListener("keydown", focusInput);

        return () => {
            document.removeEventListener("keydown", focusInput);
        }
    }, []);

    useEffect(() => {
        if(timer.current && time > 0) {
            timer.current = setTimeout(() => setTime(t => t + 1), 1000);
        }
    }, [time]);

    useEffect(() => {
        setTime(0);
    }, []);

    return {
        paragraph, 
        word, 
        charIndex, 
        time, 
        inputRef,
        isBackspaceEnabled, 
        handleInput, handleDisableBackspace, handleRestart
    };
}

export default  useIndefiniteTyping;
