//CSS does not belong to JS. Some UI framworks allos us. There are loaders that handle different file types(css will be loaded as a style tag)
//depending on the loader we could import prepocessed SASS files
//The styles will be loaded globally. There's a way to load it module-wise

import React from "react";
import { useSerializable } from "../hooks/serializable";
import ContactList from "./ContactList";
import ContactsForm from "./ContactsForm";
import Modal from "./modal";
import customClsx from "../utility/customClasses";

export interface ContactInterface {
    id?: number;
    name: string;
    phone: string;
    favorite?: boolean;
}

export interface ContactsAppState {
    contacts: ContactInterface[];
    nextId: number;
    deleting: null | ContactInterface;
    showModal: boolean;
}

const ContactsApp:React.FC = function () {

    const initialState = () => {
        const storedState = localStorage.getItem("contact-app");

        return(storedState ? JSON.parse(storedState) : {
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
        });
    }
    const [state, setState] = useSerializable<ContactsAppState>(() => "contact-app", initialState);

    const onDelete = (targetId: number): void => {
        setState((prevState: ContactsAppState) => ({
            ...prevState,
            contacts: (prevState as ContactsAppState).contacts.filter(({id}) => id !== targetId),
            deleting: null
        }));
    };

    const selectItemToDelete = (contactId: number): void => {
        setState((prevState: ContactsAppState) => {
            const deletingContact = prevState.contacts.find((contact: ContactInterface) => contact.id !== undefined && contactId === contact.id);
            return {
                ...prevState,
                deleting: deletingContact || null,
                showModal: true,
            };
        });
    };

    const { 
        contacts, 
        nextId, 
        deleting 
    } = state;

    const filteredContacts = (contacts as ContactInterface[]).reduce(
        (res, curr) => {
            curr.favorite ? res.favorites.push(curr) : res.nonFavorites.push(curr)
            return res;
        },
        { favorites: [], nonFavorites: [] } as { favorites: ContactInterface[], nonFavorites: ContactInterface[] }
    );

    const orderedContacts: ContactInterface[] = [
        ...filteredContacts.favorites,
        ...filteredContacts.nonFavorites
    ];

    const classNames = customClsx(
        "btn",
        { "btn-primary": true },
        null,
        undefined,
    );
    
    return(
        <>
        {
            deleting &&
            <Modal 
            title={`Deleting ${deleting.name}`}
            message={`Are you sure you want to delete?`}
            onDismiss={() => setState(prevState => ({ ...prevState, deleting: null }))}
            onDelete={() => onDelete(deleting.id as number)}
        />
        }

<ContactsForm
                className={classNames}
                onAddContact={(newContact: ContactInterface) => setState(prevState => ({
                    ...prevState,
                    contacts: [...prevState.contacts, { ...newContact, id: nextId }],
                    nextId: nextId as number + 1,
                }))}
            />
            <ContactList
                // className={contactClass}
                contacts={orderedContacts}
                onDeleteContact={(targetId) => selectItemToDelete(targetId)}
                onToggleFavorite={(targetId: number) => {
                    setState((prevState: ContactsAppState) => ({
                        ...prevState,
                        contacts: prevState.contacts.map((contact) => contact.id === targetId ? { ...contact, favorite: !contact.favorite } : contact)
                    }))
                }}
            />
        </>
    );
}

export default ContactsApp;
