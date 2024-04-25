import { useCallback } from "react";
import {useAppContext} from "../state";
import StatelessCounter from "./StatelessCounter";
import { increment, decrement, reset } from "../state/actions/actionTypes";
import ErrorBoundary from "./ErrorBoundary";

interface CounterProps {
    init: string;
    index: number;
}

function Counter({ init, index }: CounterProps) {

    const [state, dispatch] = useAppContext();

    const cbFnIncrement = useCallback(() => {
        dispatch(increment(index, 1));
    }, [dispatch, index]);

    const cbFnDecrement = useCallback(() => {
        dispatch(decrement(index, 1));
    }, [dispatch, index]);

    const cbFnReset = useCallback(() => {
        dispatch(reset(index));
    }, [dispatch, index]);

    return (
        <ErrorBoundary
        id={index}
        onReload={cbFnReset}
        >
            <StatelessCounter 
                id={index}
                init={init}
                count={state.counters[index]}
                setIncrement={() => cbFnIncrement()}
                setDecrement={() => cbFnDecrement()}
                setReset={() => cbFnReset()}
    
            />
        </ErrorBoundary>   
    );
}

export default Counter;
