import { ActionType, ActionTypes, Value } from "../actions";


export const saveStats = ({ value }: { value: Value }): ActionType => ({
    type: ActionTypes.SAVE_STATS,
    payload: { value },
});