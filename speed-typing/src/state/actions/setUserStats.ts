import { ActionType, ActionTypes, Value } from ".";

export const setUserStats = ({ value }: { value: Value }): ActionType => ({
    type: ActionTypes.SET_USER_STATS,
    payload: { value },
});