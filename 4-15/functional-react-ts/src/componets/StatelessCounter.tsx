import { memo } from "react";

interface StatelessCounterProps {
    id: number;
    init: string;
    count: number;
    setIncrement: () => void;
    setDecrement: () => void;
    setReset: () => void;
}

export default memo(function StatelessCounter({ id, init, count, 
    setIncrement, 
    setDecrement,
    setReset, 
}: StatelessCounterProps) {

    const addHandler = function () {
        setIncrement();
    };

    const decrementHandler = function () {
        setDecrement();
    }

    const resetHandler = function() {
        setReset();
    }

    const getValue = (): number => {
        if (typeof count !== 'number') {
            throw new Error("Counter value is not a number");
        }
    
        if (count < 0) {
            throw new Error("Counter cannot be negative");
        }
    
        return count || 0;
    };

    id
    return (
        <>
            <p>Hello {init}</p>
            <p>Count: {getValue()}</p>
            <button
                onClick={addHandler}
            >
                Increment
            </button>

            <button
                onClick={decrementHandler}
            >
                Decrement
            </button>
            <button
                onClick={resetHandler}
            >
                Reset
            </button>
        </>
    );
})