import { useEffect, useRef, useState } from "react";

function useAnimatedCounter(value: number): [{displayValue: number, animationQueue: number[]}, (newValue: number) => void] {
    const [displayValue, setDisplayValue] = useState<number>(value);
    const [animationQueue, setAnimationQueue] = useState<number[]>([]);
    const timeoutRef = useRef<number | null>(null);
    const delayTime = 1000; // Default delay time
    const delayMultiplier = 500; // Multiplier for additional delay per item in the animation queue

    useEffect(() => {
        if (value !== animationQueue[0]) {
            setAnimationQueue((prevQueue) => [...prevQueue, value]);
        }
    }, [value]);

    useEffect(() => {
        if (animationQueue.length > 0) {
            timeoutRef.current = setTimeout(() => {
                setDisplayValue(animationQueue[0]);
                setAnimationQueue((prevQueue) => prevQueue.slice(1));
            }, delayTime + (animationQueue.length - 1) * delayMultiplier);
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [animationQueue]);

    const setValue = (newValue: number) => {
        setAnimationQueue((prevQueue) => [...prevQueue, newValue]);
    };

    return [{displayValue, animationQueue}, setValue];
}

export default useAnimatedCounter;
