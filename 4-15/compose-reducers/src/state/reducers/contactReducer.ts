import { ContactInterface } from "../../componets/ContactsApp";
import { ActionTypes, ActionType } from "../actions/actionTypes";
import { StateInterface } from "./rootReducer";

function contactReducer (state: StateInterface, action: ActionType) {

    const { payload: { value }, type } = action;
    switch(type) {
        case ActionTypes.ADD_CONTACT: {
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

export default contactReducer;