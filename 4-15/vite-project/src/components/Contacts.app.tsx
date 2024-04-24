//CSS does not belong to JS. Some UI framworks allos us. There are loaders that handle different file types(css will be loaded as a style tag)
//depending on the loader we could import prepocessed SASS files
//The styles will be loaded globally. There's a way to load it module-wise

// import React from "react";
// import './App.css';
// import Counter from "./components/Counter";
import { ContactsForm } from "./ContactsForm";
import ContactList from "./ContactList";
import customClsx from "../utility/customClasses";
import { Serializable, SerializableState } from "./Serializable";
import Modal from "./modal";
// import { ReactPortal } from "react";
// import ReactDOM from "react-dom";

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

export class ContactsApp extends Serializable {
    public state: ContactsAppState;
    constructor(props: SerializableState) {
        super(props);
        this.state = this.initialState();
        this.onDelete = this.onDelete.bind(this);
    }

    getKey() {
        return "contact-app";
    }

    saveState() {
        return this.state;
    }

    initialState() {
        return {
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
        }
    }

    onDelete(targetId: number): void {
        const { contacts } = this.state;

        this.setState({
            contacts: contacts.filter(({ id }) => id !== targetId),
            deleting: null
        });
    }

    selectItemToDelete(contactId: number): void {
        this.setState({
            deleting: this.state.contacts.find((contact) => contactId === contact.id),
            showModal: true,
        });
    }

    render() {
        const { contacts, nextId, deleting } = this.state;
        const filteredContacts = contacts.reduce(
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

        const contactClass = customClsx('container');

        return (
            <>
            {deleting &&
                    <Modal
                        title={`Deleting ${deleting.name}`}
                        message={`Are you sure you want to delete?`}
                        onDismiss={() => { this.setState({ deleting: null }) }}
                        onDelete={() => { this.onDelete(deleting.id as number) }}

                    />
                }
                {/* {this.renderModal()} */}
                <ContactsForm
                    className={classNames}
                    onAddContact={(newContact: ContactInterface) => this.setState({
                        contacts: [...contacts, { ...newContact, id: nextId }],
                        nextId: nextId + 1,
                    })} />
                <ContactList
                    className={contactClass}
                    contacts={orderedContacts}
                    onDeleteContact={(targetId) => this.selectItemToDelete(targetId)}
                    onToggleFavorite={(targetId: number) => {
                        this.setState({
                            contacts: contacts.map((contact) => contact.id === targetId ? { ...contact, favorite: !contact.favorite } : contact)
                        })
                    }}

                />

            </>
        )
    }
}
// export default ContactsApp;
