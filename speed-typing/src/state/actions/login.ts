import { ActionType, ActionTypes, Value } from "../actions";


export const login = ({ value }: { value: Value }): ActionType => ({
    type: ActionTypes.LOGIN,
    payload: { value },
});