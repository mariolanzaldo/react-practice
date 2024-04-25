import { ContactInterface } from "../../componets/ContactsApp";

export enum ActionTypes {
    INCREMENT = "increment",
    DECREMENT = "decrement",
    RESET = "reset",
    INIT = "init",
    ADD_CONTACT = "addContact",
    DELETE_CONTACT="deleteContact",
    DISS_MISSMODAL="dissmissModal",
    SELECT_ITEM_TO_DELETE="selectItemToDelete",
    TOGGLE_FAVORITE="toggleFavorite",

}

export enum FormActionTypes {
    SET_NAME = "SET_NAME",
    SET_PHONE = "SET_PHONE",
    RESET_FORM = "RESET_FORM",
}

export type Value = number | Pick<ContactInterface, "name" | "phone"> | boolean;

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

export const addContact = (value: {name: string; phone: string }) => {
    console.log("FROM ACTION", value);
    return ({
    type: ActionTypes.ADD_CONTACT,
    payload: { value },
})};

export const deleteContact = (id: number) => ({
    type: ActionTypes.DELETE_CONTACT,
    payload: { id },
});

export const dissmissModal = (value: boolean) => ({
    type: ActionTypes.DISS_MISSMODAL,
    payload: { value },
});

export const selectItemToDelete = (id: number) => ({
    type: ActionTypes.SELECT_ITEM_TO_DELETE,
    payload: { id },
});

export const toggleFavorite = (id: number) => ({
    type: ActionTypes.TOGGLE_FAVORITE,
    payload: { id },
});