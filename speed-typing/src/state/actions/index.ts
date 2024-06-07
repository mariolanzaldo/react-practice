import { Game, User } from "../reducers";

export enum ActionTypes {
    SIGN_UP = "signup",
    USERNAME_EXISTENCE = "usernameExistence",
    LOGIN = "login",
    LOGOUT = "logout",
    CLEAN_NOTIFICATION = "cleanNotification",
    SET_CURRENT_STATS = "setCurrentStats",
    UPDATE_USER = "updateUser",
    // SET_MAXWPM = "setMaxWpm",
} 

export type Value = number | Pick<User, keyof User> | Pick<Game, keyof Game> | boolean | string;

export type ActionPayload = {
    id?: string; 
    value: Value;
}

export type ActionType = {
    type: ActionTypes;
    payload: ActionPayload;
}

export * from "./signup";
export * from "./usernameExistence";
export * from "./login";
export * from "./logout";
export * from "./setCurrentStats";
export * from "./updateUser";
// export * from "./setMaxWpm";
