import { ActionType, ActionTypes, Value } from "../actions";


export const setCurrentStats = ({value}: {value: Value}): ActionType => ({
    type: ActionTypes.SET_CURRENT_STATS,
    payload: {value},
});