import { ActionType, ActionTypes } from "../actions";


export const cleanNotification = (): ActionType => ({
    type: ActionTypes.CLEAN_NOTIFICATION,
    payload: {
        value: "",
    },
});