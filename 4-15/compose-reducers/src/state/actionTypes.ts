import { ContactInterface } from "../componets/ContactsApp";

export enum ActionTypes {
    INCREMENT = "increment",
    DECREMENT = "decrement",
    RESET = "reset",
    INIT = "init",
    // ADDCONTACT = "addContact",
}

export enum FormActionTypes {
    SET_NAME = "SET_NAME",
    SET_PHONE = "SET_PHONE",
    RESET_FORM = "RESET_FORM",
}

export type Value = number | Pick<ContactInterface, "name" | "phone">;

export type ActionPayload = { id?: number; value?: Value };

export type FormActionPayload = string;


export type ActionType = {
    payload: ActionPayload;
    type: ActionTypes;
}

export type FormActionType = {
    payload?: FormActionPayload;
    type: FormActionTypes;
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

// export const addContact = (id: number, value: {name: string; phone: number }) => ({
//     type: ActionTypes.ADDCONTACT,
//     payload: { id, value },
// });

export const setName = (name: string) => ({
    type: FormActionTypes.SET_NAME,
    payload: name,
});

export const setPhone = (phone: string) => ({
    type: FormActionTypes.SET_PHONE,
    payload: phone,
});

export const resetForm = () => ({
    type: FormActionTypes.RESET_FORM,
});
