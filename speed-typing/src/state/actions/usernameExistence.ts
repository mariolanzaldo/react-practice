import { ActionType, ActionTypes, Value } from "../actions";


export const usernameExistence = ({value}: {value: Value}): ActionType => ({
    type: ActionTypes.USERNAME_EXISTENCE,
    payload: {value},
});