import { GameStats, Player } from "./index";
import { Page } from "./reducer";

export enum ActionTypes {
    START_GAME = "startGame",
    UPDATE_BOARD = "updateBoard",
    UPDATE_TURN = "updateTurn",
    CHECK_GAMEOVER = "checkGameover",
    RESET_FROM_GAMEOVER = "resetFromGameover",
    RESET_GAME = "resetGame",
    SET_PAGE = "setPage",
    CLEAR_HISTORY = "clearHistory",
}

export type ActionPayload = {
    players?: Player[];
    gameStats?: GameStats;
    currentPage?: Page.main | Page.board | Page.stats;
    // game?: Game;
    boardIndex?: number | null;
    turn?: Player | null;
}

export type ActionType = {
    payload?: ActionPayload;
    type: ActionTypes;
}

interface StartGameInterface { players: Player[], currentPage:  Page.main | Page.board | Page.stats}

export const startGame = ({ players, currentPage }: StartGameInterface): ActionType => ({
    type: ActionTypes.START_GAME,
    payload: { players, currentPage },
});

export const updateBoard = ({ boardIndex, turn }: { boardIndex: number, turn: Player}): ActionType => {
    return ({
    type: ActionTypes.UPDATE_BOARD,
    payload: { boardIndex, turn },
})
};

export const updateTurn = ({ turn }: {turn: Player}): ActionType => {
    return({
        type: ActionTypes.UPDATE_TURN,
        payload: { turn },
    });
};

export const checkGameover = (): ActionType => {
    return ({
        type: ActionTypes.CHECK_GAMEOVER,
    });
};

export const resetFromGameover = (): ActionType => {
    return ({
        type: ActionTypes.RESET_FROM_GAMEOVER,
    })
};

export const resetGame = (): ActionType => {
    return ({
        type: ActionTypes.RESET_GAME,
    })
};

export const setPage = ({ currentPage }: { currentPage: Page.main | Page.board | Page.stats }): ActionType => {
    return({
        type: ActionTypes.SET_PAGE,
        payload: { currentPage }
    })
};

export const clearHistory = (): ActionType => {
    return({
        type: ActionTypes.CLEAR_HISTORY,
    })
};