import { ContactInterface } from "../componets/ContactsApp";

export enum ActionTypes {
    INCREMENT = "increment",
    DECREMENT = "decrement",
    RESET = "reset",
    INIT = "init",
}

type Value = number | Pick<ContactInterface, "name" | "phone">;

export type ActionPayload = { id?: number; value?: Value };


export type ActionType = {
    payload: ActionPayload;
    type: ActionTypes;
}


export const increment = (id: number, value: number): ActionType => ({
    type: ActionTypes.INCREMENT,
    payload: { id, value},
});


export const decrement = (id: number, value: number): ActionType => ({
    type: ActionTypes.DECREMENT,
    payload: { id, value},
});

export const reset = (id: number): ActionType => ({
    type: ActionTypes.RESET,
    payload: { id },
});

export const initialize = (id: number, value: number): ActionType => ({
    type: ActionTypes.INIT,
    payload: { id, value },
});
