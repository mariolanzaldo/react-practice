import { StateInterface } from ".";
import { ActionType, ActionTypes } from "../actions";

function usernameExistenceReducer(state: StateInterface, action: ActionType) {
    const { payload: { value }, type } = action;

    switch(type) {
        case ActionTypes.USERNAME_EXISTENCE:
            {
                const isExistent = state.users.some((user) => user.username === value) ?? false;
                // console.log("FROM REDUCER",isExistent);
                return {
                    ...state,
                    userExistence: isExistent,
                }
            }
        default:
            return state;
    }
}

export default usernameExistenceReducer;