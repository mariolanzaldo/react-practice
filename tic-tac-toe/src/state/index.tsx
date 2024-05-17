import { Dispatch, PropsWithChildren, createContext, useContext, useEffect, useReducer } from "react";
import { ActionType } from "./actionTypes";
import appReducer, { Page, Turn, initialState } from "./reducer";

export type Player = {
    name: string;
    symbol: Turn.X | Turn.O;
    moves: number;
}

export type Game = {
    board: string[] | null[];
    turn: Player | null;
    winner: Player | null;
    isGameover: boolean;
    gameStart: number | null;
    gameEnd: number | null;
}

export type GameStats = {
    winner: Player;
    duration: string;
}

export interface StateInterface {
    settings: {
        player1: Player;
        player2: Player;
    };
    game: Game;
    stats: GameStats[];
    currentPage: Page.main | Page.board | Page.stats;
}

type AppCtx = [StateInterface, Dispatch<ActionType>]

const context = createContext<AppCtx>(null as unknown as AppCtx);
// eslint-disable-next-line 
export function useAppContext(): AppCtx {
    return useContext(context);
}


export function Provider({ children }: PropsWithChildren) {

    const storeState = JSON.parse(localStorage.getItem("app-state")!);

    const initializer = storeState ?? initialState;

    const [state, dispatch ] = useReducer(
        appReducer, 
        initializer as never
    );

    useEffect(() => {
        localStorage.setItem("app-state", JSON.stringify(state));
    });

    const contextValue: AppCtx = [state, dispatch];

    return (
        <context.Provider value={contextValue}>
            {children}
        </context.Provider>
    )
}