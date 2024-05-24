import { User } from "../reducers";

export enum ActionTypes {
    SIGN_UP = "signup",
    USERNAME_EXISTENCE = "usernameExistence",
    LOGIN = "login",
    CLEAN_NOTIFICATION = "cleanNotification",
} 

export type Value = number | Pick<User, keyof User> | boolean | string;

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
