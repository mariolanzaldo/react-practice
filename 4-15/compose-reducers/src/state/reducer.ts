import { ContactsAppState } from "../componets/ContactsApp";
import { ActionTypes, ActionType } from "./actionTypes";

export interface StateInterface {
    counters: number[];
    contacts?: ContactsAppState;
}

export const initialState: StateInterface = {
    counters: [0, 1, 2],
    contacts: {
        contacts: [
            {
                id: 0,
                name: 'John',
                phone: '13456',
                favorite: true
            },
        ],
        nextId: 1,
        deleting: null,
        showModal: false,
    },
};

function appReducer(state: StateInterface, action: ActionType) {
    const { counters } = state;
    const { payload: { id, value }, type } = action;


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

export default appReducer;
