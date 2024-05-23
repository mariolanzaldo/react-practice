import { Dispatch, PropsWithChildren, createContext, useContext, useEffect, useReducer } from "react";
import rootReducer, { StateInterface, initialState } from "./reducers";
import { ActionType } from "./actions";

type AppCtx = [StateInterface, Dispatch<ActionType>];

const context = createContext<AppCtx>(null as unknown as AppCtx);
// eslint-disable-next-line 
export function useAppContext(): AppCtx {
    return useContext(context);
}


export function Provider({ children }: PropsWithChildren) {

    const storeState = JSON.parse(localStorage.getItem("typing-app-state")!);

    const initializer = storeState ?? initialState;

    const [state, dispatch ] = useReducer(
        rootReducer, 
        initializer as never
    );

    useEffect(() => {
        localStorage.setItem("typing-app-state", JSON.stringify(state));
    }, [state]);

    const contextValue: AppCtx = [state, dispatch];

    return (
        <context.Provider value={contextValue}>
            {children}
        </context.Provider>
    )
}