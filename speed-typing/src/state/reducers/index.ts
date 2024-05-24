import { ActionType } from "../actions";
import loginReducer from "./loginReducer";
import usernameExistenceReducer from "./userExistenceReducer";
import usersReducer from "./usersReducer";

export interface GameStat {
    date: string;
    mistakes: number;
    speed: number;
}

export interface User {
    id?: string;
    username?: string;
    firstName?: string;
    lastName?: string;
    password: string;
    avatar?:string;
    stats?: GameStat[];
}

export interface Game {
    date: string;
    mistakes: number;
}

export interface StandardError {
    error: boolean;
    errorMessage: string;
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
    globalError: StandardError;
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
    globalError: {
        error: false,
        errorMessage: "",
    },
}

function rootReducer(state: StateInterface, action: ActionType) {

    const loginState = loginReducer(state, action);
    console.log("AFTER STORING", loginState);

    const newState = {
        ...state,
        users: usersReducer(state, action)!.users,
        userExistence: usernameExistenceReducer(state, action).userExistence,
        currentUser: loginState.currentUser,
        globalError: loginState.globalError,
    }

    return newState;
}

export default rootReducer;