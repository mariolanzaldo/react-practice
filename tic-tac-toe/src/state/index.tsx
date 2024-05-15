import { Dispatch, PropsWithChildren, createContext, useContext, useReducer } from "react";
import { ActionType } from "./actionTypes";
import appReducer, { Page, Turn, initialState } from "./reducer";

export type Player = {
    name: string;
    symbol: Turn.X | Turn.O;
    moves: number;
}

export type GameStats = {
    winner: Player;
    duration: string;
}

export interface StateInterface {
    settings: {
        player1: Player;
        player2: Player;
    },
    board: string[] | null[]; //TODO: This could change in the future
    stats: GameStats[];
    currentPage: Page.newGame | Page.board | Page.stats;
}

type AppCtx = [StateInterface, Dispatch<ActionType>]

const context = createContext<AppCtx>(null as unknown as AppCtx);
// eslint-disable-next-line 
export function useAppContext(): AppCtx {
    return useContext(context);
}


export function Provider({ children }: PropsWithChildren) {

    // const storeState = JSON.parse(localStorage.getItem("app-state")!);

    // const initializer = storeState ? storeState : initialState;

    // const [state, dispatch ] = useReducer(reducer, initializer as never);

    const [state, dispatch ] = useReducer(appReducer, initialState);

    // console.log(state);
    const contextValue: AppCtx = [state, dispatch];

    return (
        <context.Provider value={contextValue}>
            {children}
        </context.Provider>
    )
}