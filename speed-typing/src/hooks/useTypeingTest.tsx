import { ChangeEvent, useEffect, useRef, useState } from "react";
import testCalculator from "../utils/testCalculator";
import { useAppContext } from "../state";
import { setCurrentStats } from "../state/actions";
import wordGenerator from "../utils/wordGenerator";
import { PARAGRAPH, TIME } from "../utils/constants";

function UsetypingTest (text: string) {
    const [appState, dispatch ] = useAppContext();
    console.log(appState);

    // eslint-disable-next-line
    const [paragraph, setParagraph ] = useState(text);
    const [word, setWord] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    //TODO: Change this
    const [time, setTime ] = useState(TIME);
    const [mistakes, setMistakes] = useState(0);
    const [wpm, setWpm] = useState(0); 
    const [acc, setAcc] = useState(0);
    const [isBackspaceEnabled, setIsBackspaceEnabled] = useState(true);

    const inputRef = useRef<HTMLInputElement | null>(null);
    const totalChars = useRef(0);
    const totalCorrectChars = useRef(0);
    const timer = useRef<NodeJS.Timeout | null>(null);

    const handleRestart = () => {
        clearTimeout(timer.current!);
        setParagraph(wordGenerator(PARAGRAPH));
        setWord('');
        setCharIndex(0);
        setTime(TIME);
        setMistakes(0);
        setWpm(0);
        setAcc(0);
        totalChars.current = 0;
        totalCorrectChars.current = 0;
        timer.current = null;
        dispatch(setCurrentStats({
            value: {
                date: null,
                mistakes: 0,
                wpm: 0,
                accuracy: 0,
                isGameover: false,
            }
        }));
    };

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        if(time <= 0 || value.length >= paragraph.length) {
            clearTimeout(timer.current!);

            //TODO: Do something here!
            dispatch(setCurrentStats({
                value: {
                    date: null,
                    mistakes,
                    wpm,
                    accuracy: acc,
                    isGameover: true,
                }
            }));

            return;
        }


        if(!isBackspaceEnabled && (event.nativeEvent as InputEvent).inputType === 'deleteContentBackward') {
            event.preventDefault();
            return;
        }

        setWord(value);
        setCharIndex(value.length);
        
        const { mistakes: calcMistakes , wpm: calcWpm } = testCalculator(paragraph, value);
        
        setMistakes(calcMistakes);
        setWpm(calcWpm);
        
        testAccuracy(value, paragraph);

        if(!timer.current) {
            timer.current = setTimeout(() => setTime(t => t - 1), 1000);
        }
    };

    const handleDisableBackspace = () => {
        setIsBackspaceEnabled(!isBackspaceEnabled);
    }

    function testAccuracy(value: string, paragraph: string) {
        if(value.length > charIndex) {
            totalChars.current += 1;
            if(value[charIndex] === paragraph[charIndex]) {
                totalCorrectChars.current += 1;
            }
            
            setAcc(Math.round(totalCorrectChars.current / totalChars.current * 100));
        }
    }

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
            timer.current = setTimeout(() => setTime(t => t - 1), 1000);
        }

        if(time <= 0) {
            clearTimeout(timer.current!);

            dispatch(setCurrentStats({
                value: {
                    date: null,
                    mistakes,
                    wpm,
                    accuracy: acc,
                    isGameover: true,
                }
            }));
        }
    }, [time]);

    // const state = {

    // }

    return {
        // state,
        mistakes, wpm, acc,
        paragraph, word, charIndex, time,
        inputRef,
        handleInput,
        handleDisableBackspace,
        handleRestart,
    };
}

export default  UsetypingTest;