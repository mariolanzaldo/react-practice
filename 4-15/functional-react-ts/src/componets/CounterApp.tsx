import { FormEvent, useState } from "react";
import Counter from "./Counter";
// import ErrorBoundary from "./ErrorBoundary";
// import { useAppContext } from "../state";
// import { init } from "../state/actionTypes";

function CounterApp() {
    // const [state, dispatch] = useAppContext();

    // const cbFnInit = useCallback(() => {
    //     dispatch(init(0, 0));
    // }, [dispatch]);

    // const handleReset = () => {
    //     console.log('Handle reset');
    //     localStorage.removeItem("counterState");
    // };

    const [inputValue, setInputValue] = useState("");

    function onInputChange({ target }: FormEvent<HTMLInputElement>) {
        setInputValue(target.value);
    }

    return(

        <>
        <input 
            value={inputValue}
            type="text"
            onChange={onInputChange}
        />

        {/* <ErrorBoundary 
        id={'counter-1'}
        onReload={handleReset}
        >
        </ErrorBoundary> */}
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