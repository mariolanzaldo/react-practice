import { Dispatch, PropsWithChildren, createContext, useContext, useEffect, useReducer } from "react";
import rootReducer, { StateInterface, initialState } from "./reducers";
import { ActionType } from "./actions";
import { useInitializedStateContext } from "./contextState";

type AppCtx = [StateInterface, Dispatch<ActionType>];

const context = createContext<AppCtx>(null as unknown as AppCtx);

export function useAppContext(): AppCtx {
    return useContext(context);
}

export function Provider({ children }: PropsWithChildren) {

    const { state: initialStateFromContext } = useInitializedStateContext();

    const [appState, dispatch] = useReducer(rootReducer, initialStateFromContext ?? initialState);

    useEffect(() => {
        localStorage.setItem("typing-app", JSON.stringify(appState.currentUser));
    });

    const contextValue: AppCtx = [appState, dispatch];

    return (
            <context.Provider value={contextValue}>
                {children}
            </context.Provider>
    );
}
