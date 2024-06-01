import { ActionType } from "../actions";
import loginReducer from "./loginReducer";
import typingTestReducer from "./typingTestReducer";
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
    date?: number | null;
    mistakes: number;
    wpm: number;
    maxWpm: number;
    accuracy: number;
    isGameover: boolean;
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
        date: null,
        mistakes: 0,
        wpm: 0,
        maxWpm: 0,
        accuracy: 0,
        isGameover: false,
    },
    userExistence: false,
    currentUser: null,
    currentPage: Page.login,
    //TODO: Create a globalError[]. Try to create a queue rather than an array
    globalError: {
        error: false,
        //severity: 
        errorMessage: "",
    },
}

function rootReducer(state: StateInterface, action: ActionType) {

   const loginState = loginReducer(state, action);
    const usersState = usersReducer(state, action);
    const gameState = typingTestReducer(state, action);

    const newState = {
        ...state,
        users: usersState.users,
        userExistence: usernameExistenceReducer(state, action).userExistence,
        game: gameState.game,
        currentUser: loginState.currentUser,
        globalError: loginState.globalError,
    };

    return newState;
}

export default rootReducer;