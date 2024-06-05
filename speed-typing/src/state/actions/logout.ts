import { ActionType, ActionTypes, Value } from "../actions";


export const logout = ({ value }: { value: Value }): ActionType => ({
    type: ActionTypes.LOGOUT,
    payload: { value },
});