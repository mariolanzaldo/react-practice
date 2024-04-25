import { ContactInterface, ContactsAppState } from "../componets/ContactsApp";
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

        case ActionTypes.ADD_CONTACT: {
            console.log("FROM REDUCER", action);
            const { contacts } = state;
            const { name, phone } = value as ContactInterface;
            // as Pick<ContactInterface, "name" | "phone">;

            if(!contacts) return state;

            return {
              ...state,
              contacts: {
                ...contacts,
                contacts: [
                  ...contacts.contacts,
                  {
                    id: contacts.nextId + 1,
                    name: name,
                    phone: phone,
                  } as ContactInterface,
                ],
                nextId: contacts!.nextId + 1,
              },
            };
          }
          case ActionTypes.DELETE_CONTACT: {
            const { contacts } = state;
            if(!contacts) return state;
      
            return {
              ...state,
              contacts: {
                ...contacts,
                contacts: contacts.contacts.filter(
                  (contact) => +contact.id! !== contacts!.deleting?.id
                ),
                deleting: null,
              },
            };
          }
          case ActionTypes.DISS_MISSMODAL: {
            const { contacts } = state;
      
            return {
              ...state,
              contacts: {
                ...contacts,
                deleting: null,
              },
            };
          }
          case ActionTypes.SELECT_ITEM_TO_DELETE: {
            const { contacts } = state;
            if(!contacts) return state;
      
            return {
              ...state,
              contacts: {
                ...contacts,
                deleting: contacts.contacts.find(
                  (contact) => contact.id === action.payload.id
                ),
              },
            };
          }
          case ActionTypes.TOGGLE_FAVORITE: {
            const { contacts } = state;
            if(!contacts) return state;
      
            return {
              ...state,
              contacts: {
                ...contacts,
                contacts: contacts.contacts.map((contact) =>
                  action.payload.id === contact.id
                    ? { ...contact, favorite: !contact.favorite }
                    : contact
                ),
              },
            };
          }
      
        default:
        return state;
    }

}

export default appReducer;
