import { ReactNode, createContext, useContext, useState } from "react";

type CounterContextType = [number[], (index: number, value: number) => void];

interface CounterProviderProps {
    children: ReactNode;
}

const counterContext = createContext<CounterContextType | null>(null);

export function useCounterContext(): CounterContextType {
    const context = useContext(counterContext);
    if(!context) {
        throw new Error("useCountercontext must be used within a CounterProvider");
    }
    return context;
}

export function CounterProvider({ children }: CounterProviderProps): JSX.Element {
    const [providerState, setProviderState] = useState([1, 2, 3]);


    //TODO: Add validation to this function
    const setIndexedState = function (index: number, value: number): void {
        const newState = [...providerState];
        newState[index] = value;

        setProviderState(newState);
    }

    return (
        <counterContext.Provider value={[providerState, setIndexedState]}>
            {children}
        </counterContext.Provider>
    );
}