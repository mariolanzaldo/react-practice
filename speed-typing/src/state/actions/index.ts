import { User } from "../reducers";

export enum ActionTypes {
    SIGN_UP = "signup",
    USERNAME_EXISTENCE = "usernameExistence"
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

export const signup = (id: string, value: Value): ActionType => ({
    type: ActionTypes.SIGN_UP,
    payload: { id, value },
});

export const usernameExistence = ({value}: {value: Value}) => ({
    type: ActionTypes.USERNAME_EXISTENCE,
    payload: {value},
});
