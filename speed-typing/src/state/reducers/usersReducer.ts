import { StateInterface } from ".";
import { ActionType, ActionTypes } from "../actions";


function usersReducer(state: StateInterface, action: ActionType) {
    const { payload: { id, value }, type } = action;
    console.log(id);

    switch(type) {
        case ActionTypes.SIGN_UP:
            console.log('Enters!', value);
        return{
            ...state
        }
        case ActionTypes.USERNAME_EXISTENCE:
            {
                const isExistent = state.users.some((user) => user.username === value);
    
                return {
                    ...state,
                    userExistence: isExistent,
                }
            }
        
        default:
            return state;
    }
}

export default usersReducer;