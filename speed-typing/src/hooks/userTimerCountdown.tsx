import { useEffect, useState, useRef, useCallback } from "react";

interface UseTimerCountdownProps {
    initialTime: number;
}

function useTimerCountdown({ initialTime }: UseTimerCountdownProps) {
    const [time, setTime] = useState(initialTime);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const startTimer = useCallback(() => {
        if (!timerRef.current) {
            timerRef.current = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime > 0) {
                        return prevTime - 1;
                    } else {
                        clearInterval(timerRef.current!);
                        timerRef.current = null;
                        return 0;
                    }
                });
            }, 1000);
        }
    }, []);

    useEffect(() => {
        setTime(initialTime);
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [initialTime]);

    return { time, startTimer, setTime };
}

export default useTimerCountdown;
