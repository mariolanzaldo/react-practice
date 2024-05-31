import { Game, StateInterface } from ".";
import { ActionType, ActionTypes } from "../actions";

function typingTestReducer(state: StateInterface, action: ActionType) {
    const { payload: { value }, type } = action;

    switch(type) {
        case ActionTypes.SET_CURRENT_STATS:
            {
                const { 
                    mistakes,
                    wpm,
                    accuracy,
                    isGameover,
                } = value as Pick<Game, keyof Game>;

                const timestamp = Date.now();
                return {
                    ...state,
                    game: {
                        date: timestamp,
                        mistakes,
                        wpm,
                        accuracy,
                        isGameover,
                    }
            }
        }
        default:
            return state;
    }
}

export default typingTestReducer;