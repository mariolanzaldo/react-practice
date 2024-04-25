import React, { useCallback } from "react";
import ContactList from "./ContactList";
import ContactsForm from "./ContactsForm";
import Modal from "./modal";
import customClsx from "../utility/customClasses";
import { useAppContext } from "../state";
import { addContact, deleteContact, dissmissModal, selectItemToDelete, toggleFavorite } from "../state/actions/actionTypes";

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

    const [state, dispatch] = useAppContext();

    const { 
      contacts
    } = state;

    const filteredContacts = (contacts!.contacts as ContactInterface[]).reduce(
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

    const onDeleteFn = useCallback(() => dispatch(deleteContact(contacts!.deleting!.id!)), [contacts, dispatch]);
    const onDismissFn = useCallback(() => dispatch(dissmissModal(false)), [dispatch]);
    const onAddContactFn = useCallback((newContact: ContactInterface) => dispatch(addContact(newContact)), [dispatch]);
    const onDeleteContactFn= useCallback((targetId: number) => dispatch(selectItemToDelete(targetId)), [dispatch]);
    const onToggleFavoriteFn = useCallback((targetId: number) => dispatch(toggleFavorite(targetId)), [dispatch]);
    
    return(
        <>
        {
            contacts!.deleting &&
            <Modal 
            title={`Deleting ${contacts!.deleting.name}`}
            message={`Are you sure you want to delete?`}
            onDismiss={onDismissFn}
            onDelete={onDeleteFn}
        />
        }

<ContactsForm
                className={classNames}
                onAddContact={onAddContactFn}
            />
            <ContactList
                contacts={orderedContacts}
                onDeleteContact={onDeleteContactFn}
                onToggleFavorite={onToggleFavoriteFn}
            />
        </>
    );
}

export default ContactsApp;
