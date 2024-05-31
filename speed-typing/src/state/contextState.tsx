import { PropsWithChildren, createContext, useContext } from "react";
import useInitializeState from "../hooks/useInitializeState";
import { StateInterface } from "./reducers";


interface InitializeContextProps {
    state: StateInterface | null;
    isDBInitialized: boolean;
}

const stateContext = createContext<InitializeContextProps>(null as unknown as InitializeContextProps);

export const useInitializedStateContext = (): InitializeContextProps => {
    return useContext(stateContext);
}

function InitiaizedStateProvider ({ children}: PropsWithChildren) {

    const { state, isDBInitialized } = useInitializeState();

    if (!isDBInitialized) {
        return <div>Loading...</div>;
    }

    return(

        <stateContext.Provider value={{ state, isDBInitialized}}>
            {children}
        </stateContext.Provider >
    );
}

export default InitiaizedStateProvider;
