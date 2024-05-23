import { ActionType } from "../actions";
import usersReducer from "./usersReducer";

export interface GameStat {
    date: string;
    mistakes: number;
    speed: number;
}

export interface User {
    id: string;
    username: string;
    password: string;
    stats: GameStat[];
}

export interface Game {
    date: string;
    mistakes: number;
}

export enum Page {
    login = "login",
    board = "board",
    stats = "stats",
}

export interface StateInterface {
    users: User[]; 
    game: Game;
    currentUser: User | null;
    userExistence: boolean;
    currentPage: Page;
}

export const initialState: StateInterface = {
    users: [],
    game: {
        date: "",
        mistakes: 0,
    },
    userExistence: false,
    currentUser: null,
    currentPage: Page.login,
}

function rootReducer(state: StateInterface, action: ActionType) {
    const newState = {
        ...state,
        users: usersReducer(state, action)!.users
    }

    return newState;
}

export default rootReducer;