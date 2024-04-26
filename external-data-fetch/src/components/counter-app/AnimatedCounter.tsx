import { ReactElement, useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

interface AnimatedCounterProps {
    value: number;
}

function AnimatedCounter({ value }: AnimatedCounterProps): ReactElement {

    const [displayValue, setDisplayValue] = useState<number>(value);
    const [animationQueue, setAnimationQueue] = useState<number[]>([]);
    const counterDisplayRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<number | null>(null);

    // const [displayValue, setDisplayValue] = useState(value);
    // const [isAnimating, setIsAnimating] = useState(false);
    // const counterDisplayRef = useRef(null);
    // const setTimeoutRef = useRef(0);


    //TODO: Use a custom hook to switch between states
    useEffect(() => {
        if (animationQueue.length === 0) {
            return;
        }

        const nextValue = animationQueue[0];
        const animationDuration = 500; 
    
        setDisplayValue(nextValue);
        timeoutRef.current = window.setTimeout(() => {
            setAnimationQueue(prevQueue => prevQueue.slice(1));
        }, animationDuration);
    
        return () => {
            if (timeoutRef.current !== null) {
                clearTimeout(timeoutRef.current as number);
            }
        };
    }, [animationQueue]);

    useEffect(() => {
        setAnimationQueue(prevQueue => [...prevQueue, value]);
    }, [value]);

    // useEffect(() => {

    //     if (displayValue !== value) {
    //         clearTimeout(setTimeoutRef.current);
    //         setIsAnimating(true);
    //         setTimeoutRef.current = setTimeout(() => {
    //             setDisplayValue(value);
    //             setIsAnimating(false);
    //         }, 1000);
    //     }


    //     return () => clearTimeout(setTimeoutRef.current);
    // }, [value, displayValue]);

    console.log(animationQueue.length);
    return (
        <>
            <div
                ref={counterDisplayRef}
                className={`${styles.animatedDisplay} ${animationQueue.length > 0 ? styles.slidein : ""}`}
                // className={`${styles.animatedDisplay} ${isAnimating ? styles.slidein : ""}`}
            >

                {displayValue}

            </div>
        </>
    )
}

export default AnimatedCounter;

//TODO: Improve the animation
//TODO: If the button is clicked several times it should be able to see all the intermediate values/animations