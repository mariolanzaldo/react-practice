import { ActionType, ActionTypes, Value } from "../actions";


export const updateUser = ({ value }: { value: Value }): ActionType => ({
    type: ActionTypes.UPDATE_USER,
    payload: { value },
});