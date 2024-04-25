import { FormEvent, useState } from "react";
import Counter from "./Counter";
import customClsx from "../utility/customClasses";
// import ErrorBoundary from "./ErrorBoundary";
// import { useAppContext } from "../state";
// import { init } from "../state/actionTypes";

function CounterApp() {

    const [inputValue, setInputValue] = useState("");

    function onInputChange({ target }: FormEvent<HTMLInputElement>) {
        setInputValue(target.value);
    }

    return(

        <>
        <input
            className={customClsx('form-control', 'mt-2', 'mb-2')} 
            value={inputValue}
            type="text"
            onChange={onInputChange}
        />
            <Counter
                init={inputValue}
                index={0}
            />
            <Counter
                init={inputValue}
                index={1}
            />
            <Counter
                init={inputValue}
                index={2}
            />
    </>
    );
}

export default CounterApp;