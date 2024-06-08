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
    initialTime: number;
}

function useTypingTest ({ text, initialTime }: UseTypingTest) {
    const [appState, dispatch ] = useAppContext();
    const { accuracy: acc, mistakes, wpm, maxWpm } = appState.game;
    const { paragraph, regenerateParagraph } = useParagraph({ text });

    // eslint-disable-next-line
    const [word, setWord] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const [time, setTime ] = useState(initialTime);
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
        setTime(initialTime);
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
    }, [dispatch, initialTime]);

    const handleInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        let newMaxWpm = 0;
        const { value } = event.target;

        if(time <= 0 || value.length >= paragraph.length) {
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

        const { mistakes: calcMistakes , wpm: calcWpm, maxWpm: calcMaxWpm } = testCalculator(paragraph, value, timeElapsed, initialTime);
        
        if(calcMaxWpm > maxWpm!) {
            newMaxWpm = calcMaxWpm;
        }

        const calcAcc = testAccuracy(value, paragraph, charIndex, totalChars, totalCorrectChars);

        dispatch(setCurrentStats({
            value: {
                username: appState.currentUser?.username,
                date: null,
                mistakes: calcMistakes,
                wpm: calcWpm,
                maxWpm: newMaxWpm,
                accuracy: calcAcc,
                isGameover: false,
            }
        }));

        if(!timer.current) {
            timer.current = setTimeout(() => setTime(t => t - 1), 1000);
        }
    // eslint-disable-next-line
    }, [time, paragraph, dispatch, mistakes, wpm, acc, isBackspaceEnabled, maxWpm, charIndex, initialTime]);

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
            timer.current = setTimeout(() => setTime(t => t - 1), 1000);
        }

        if(time <= 0) {
            clearTimeout(timer.current!);

            const stats = {
                date: Date.now(),
                username: appState.currentUser?.username,
                mistakes,
                wpm,
                maxWpm,
                accuracy: acc,
                isGameover: true,
            };

            saveStat(stats as GameStat);


            dispatch(setCurrentStats({
                value: stats,
            }));

        }
    }, [time]);

    useEffect(() => {
        setTime(initialTime);
    }, [initialTime]);

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

export default  useTypingTest;

// import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
// import testCalculator from "../utils/testCalculator";
// import { useAppContext } from "../state";
// import { setCurrentStats } from "../state/actions";
// import testAccuracy from "../utils/testAccuracy";
// import useParagraph from "./useParagraph";
// import useTimerCountdown from "./userTimerCountdown";

// interface UseTypingTest {
//     text: string;
//     initialTime: number;
// }

// function useTypingTest({ text, initialTime }: UseTypingTest) {
//     const [appState, dispatch] = useAppContext();
//     const { accuracy: acc, mistakes, wpm, maxWpm } = appState.game;
//     const { paragraph, regenerateParagraph } = useParagraph({ text });

//     const [word, setWord] = useState('');
//     const [charIndex, setCharIndex] = useState(0);
//     const [isBackspaceEnabled, setIsBackspaceEnabled] = useState(true);

//     const inputRef = useRef<HTMLInputElement | null>(null);
//     const totalChars = useRef(0);
//     const totalCorrectChars = useRef(0);
//     const startTime = useRef<Date | null>(null);

//     const { time, startTimer, setTime } = useTimerCountdown({ initialTime });

//     const handleRestart = useCallback(() => {
//         regenerateParagraph();
//         setWord('');
//         setCharIndex(0);
//         setTime(initialTime);
//         totalChars.current = 0;
//         totalCorrectChars.current = 0;
//         startTime.current = null;
//         dispatch(setCurrentStats({
//             value: {
//                 date: null,
//                 mistakes: 0,
//                 wpm: 0,
//                 maxWpm: 0,
//                 accuracy: 0,
//                 isGameover: false,
//             }
//         }));
//     }, [dispatch, initialTime, regenerateParagraph, setTime]);

//     const handleInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
//         let newMaxWpm = 0;
//         const { value } = event.target;

//         if (time <= 0 || value.length >= paragraph.length) {
//             dispatch(setCurrentStats({
//                 value: {
//                     date: null,
//                     mistakes,
//                     wpm,
//                     maxWpm,
//                     accuracy: acc,
//                     isGameover: true,
//                 }
//             }));
//             return;
//         }

//         if (!isBackspaceEnabled && (event.nativeEvent as InputEvent).inputType === 'deleteContentBackward') {
//             event.preventDefault();
//             return;
//         }

//         setWord(value);
//         setCharIndex(value.length);

//         if (!startTime.current) {
//             startTime.current = new Date();
//             startTimer();
//         }

//         const currentTime = new Date();
//         const timeElapsed = (currentTime.getTime() - startTime.current.getTime()) / 1000;

//         const { mistakes: calcMistakes, wpm: calcWpm, maxWpm: calcMaxWpm } = testCalculator(paragraph, value, timeElapsed, initialTime);

//         if (calcMaxWpm > maxWpm!) {
//             newMaxWpm = calcMaxWpm;
//         }

//         const calcAcc = testAccuracy(value, paragraph, charIndex, totalChars, totalCorrectChars);

//         dispatch(setCurrentStats({
//             value: {
//                 date: null,
//                 mistakes: calcMistakes,
//                 wpm: calcWpm,
//                 maxWpm: newMaxWpm,
//                 accuracy: calcAcc,
//                 isGameover: false,
//             }
//         }));
//     }, [time, paragraph, dispatch, mistakes, wpm, acc, isBackspaceEnabled, maxWpm, setTime, startTimer]);

//     const handleDisableBackspace = useCallback(() => {
//         setIsBackspaceEnabled(!isBackspaceEnabled);
//     }, []);

//     useEffect(() => {
//         const focusInput = () => {
//             if (inputRef.current) {
//                 inputRef.current.focus();
//             }
//         };

//         document.addEventListener("keydown", focusInput);

//         return () => {
//             document.removeEventListener("keydown", focusInput);
//         }
//     }, []);

//     useEffect(() => {
//         setTime(initialTime);
//     }, [initialTime, setTime]);

//     return {
//         paragraph,
//         word,
//         charIndex,
//         time,
//         inputRef,
//         isBackspaceEnabled,
//         handleInput,
//         handleDisableBackspace,
//         handleRestart
//     };
// }

// export default useTypingTest;
