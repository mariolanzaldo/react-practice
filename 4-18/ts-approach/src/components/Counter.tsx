// import { useState } from "react";

import { ReactElement } from "react";
import { useCounterContext } from "../state";

interface CounterProps{ 
    init: string;
    index: number;
    // count?: number;
    // onChange: (value: number) => void;
}

const Counter = function ({ init, index }: CounterProps): ReactElement {
    // const [count, setCount] = useState(0);
    const [count, setCount] = useCounterContext();
    const addHandler = function () {

        setCount(index, count[index] + 1)
        // onChange(count[index] + 1);
        // console.log(count + 1);
    };
    return (
        <>
            <p>Hello {init}</p>
            <p>Count: {count[index]}</p>
            <button
                onClick={addHandler}
            >
                Add
            </button>
        </>
    );
}

export default Counter;