// import { StateInterface, initialState } from "./"
import { ActionType } from "../actions/actionTypes";
import contactReducer from "./contactReducer";
import counterReducer from "./counterReducer";
import { ContactsAppState } from "../../componets/ContactsApp";

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

function rootReducer(state: StateInterface, action: ActionType) {
    const newState = {
        ...state,
        counters: counterReducer(state, action)!.counters,
        contacts: contactReducer(state, action).contacts,
    }

    return newState;
}

export default rootReducer;