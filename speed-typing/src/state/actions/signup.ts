import { ActionType, ActionTypes, Value } from "../actions";


export const signup = ({ value }: { value: Value }): ActionType => ({
    type: ActionTypes.SIGN_UP,
    payload: { value },
});