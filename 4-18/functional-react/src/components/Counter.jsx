import { useCallback } from "react";
import { useCounterContext } from "../state";
import StatelessCounter from "./StatelessCounter";

export default function Counter({ init, index }) {
    const [count, setCount] = useCounterContext();

    const cbFn = useCallback((increment) => setCount(index, increment), []);

    //This preserve the initial state [0,0,0] and just starting all over again
    // const cbFn = useCallback(() => setCount(index, count[index] + 1), []);
    // const component = useMemo(() => (<StatelessCounter
    //     id={index}
    //     init={init}
    //     count={count[index]}
    //     setCount={cbFn} />), [count[index]]);

    return (
        // component
        <StatelessCounter
            id={index}
            init={init}
            count={count[index]}
            setCount={cbFn} />
    );
}

//TODO: Improve the reducer  and not just setting a value. Add a decrement and reset a counter.
//TODO: Change the contacts app to use reducers. Multiple reducers or or compose reduces(One reducer that manage a reducer for the form and another for the contact list). 