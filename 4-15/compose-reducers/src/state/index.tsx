import { Dispatch, ReactNode, createContext, useContext, useEffect, useReducer } from "react";
// import  appReducer, { StateInterface, initialState  } from "./reducer";
import rootReducer, { StateInterface,  initialState } from "./reducers/rootReducer";
import {ActionType} from "./actions/actionTypes";

type AppCtx = [StateInterface, Dispatch<ActionType>];

const context = createContext<AppCtx>(null as unknown as AppCtx);

export function useAppContext(): AppCtx {
    return useContext(context);
}

export function Provider({ children }: { children: ReactNode }) {
  const storeState = JSON.parse(localStorage.getItem("app-state")!);

  const initializer = storeState ? storeState : initialState ;

    const [providerState, dispatchProviderState] = useReducer<typeof rootReducer>(
      rootReducer,
        initializer as never
    );

    useEffect(() => {
      localStorage.setItem("app-state", JSON.stringify(providerState));

    }, [providerState]);
  
    const contextValue: AppCtx = [providerState, dispatchProviderState];
    return (
      <context.Provider value={contextValue}>{children}</context.Provider>
    );
  }
