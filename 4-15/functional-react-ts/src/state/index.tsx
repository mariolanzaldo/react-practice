import { Dispatch, ReactNode, createContext, useContext, useReducer } from "react";
import  appReducer, { StateInterface, initialState  } from "./reducer";
import {ActionType} from "./actionTypes";

type AppCtx = [StateInterface, Dispatch<ActionType>];

const context = createContext<AppCtx>(null as unknown as AppCtx);

export function useAppContext(): AppCtx {
    return useContext(context);
}

export function Provider({ children }: { children: ReactNode }) {
    const [providerState, dispatchProviderState] = useReducer(
        appReducer,
        initialState
    );
  
    const contextValue: AppCtx = [providerState, dispatchProviderState];
    return (
      <context.Provider value={contextValue}>{children}</context.Provider>
    );
  }
