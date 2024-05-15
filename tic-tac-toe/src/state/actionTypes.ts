import { GameStats, Player } from "./index";
import { Page } from "./reducer";

export enum ActionTypes {
    START_GAME = "startGame",
}

export type ActionPayload = {
    players?: Player[];
    gameStats?: GameStats;
    currentPage?: Page.newGame | Page.board | Page.stats; 
}

export type ActionType = {
    payload: ActionPayload;
    type: ActionTypes;
}

interface StartGameInterface { players: Player[], currentPage:  Page.newGame | Page.board | Page.stats}

export const startGame = ({ players, currentPage }: StartGameInterface): ActionType => ({
    type: ActionTypes.START_GAME,
    payload: { players, currentPage },
})