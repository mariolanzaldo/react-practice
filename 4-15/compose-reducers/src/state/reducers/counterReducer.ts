import { ActionTypes, ActionType } from "../actions/actionTypes";
import { StateInterface } from "./rootReducer";

function counterReducer (state: StateInterface, action: ActionType) {

    const { payload: { id, value }, type } = action;
    const { counters } = state;
    
    switch(type) {
        case ActionTypes.INIT: {
            if (counters.length > 0 && +id! < counters.length) {
                const newState = [...counters];
                newState[+id!] = +value!;

                return { ...state, counters: newState };
            }
            break;
        }

        case ActionTypes.INCREMENT: {
            if (counters.length > 0 && +id! < counters.length) {
                const newState = [...counters];
                newState[+id!] = +newState[+id!] + +value!;
                return {
                    ...state,
                    counters: newState,
                }
            }
        }
        
        break;
        case ActionTypes.DECREMENT: {
            if (counters.length > 0 && +id! < counters.length) {
                const newState = [...counters];
                newState[+id!] = +newState[+id!] - +value!;
                return {
                    ...state,
                    counters: newState,
                }
            }
        }
        break;
        case ActionTypes.RESET: 
            {
                if(counters.length > 0 && +id! < counters.length) {
                    const newState = [...counters];

                    newState[+id!] = 0;

                    return {
                        ...state,
                        counters: newState,
                    }
                }
            }

        break;
        default:
        return state;
    }
}

export default counterReducer;