//CSS does not belong to JS. Some UI framworks allos us. There are loaders that handle different file types(css will be loaded as a style tag)
//depending on the loader we could import prepocessed SASS files
//The styles will be loaded globally. There's a way to load it module-wise

// import React from "react";
// import './App.css';
// import Counter from "./components/Counter";
import { ContactsForm } from "./ContactsForm";
import ContactList from "./ContactList";
import customClsx from "./../utility/customClasses";
import { Serializable } from "./Serializable";
import Modal from "./modal";

export class ContactsApp extends Serializable {
    constructor(props) {
        super(props);
        this.state = this.initialState();
        this.onDelete = this.onDelete.bind(this);
    }

    getKey() {
        return "contact-app";
    }

    saveState() {

        const { contacts, nextId, } = this.state;
        return { contacts, nextId };
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
            ], nextId: 1,
            deleting: null,
        }
    }

    onDelete(targetId) {
        const { contacts } = this.state;

        this.setState({
            contacts: contacts.filter(({ id }) => id !== targetId),
            deleting: null
        });
    }

    selectItemToDelete(contactId) {
        this.setState({
            deleting: this.state.contacts.find((contact) => contactId === contact.id),
        });
    }

    render() {
        const { contacts, nextId, deleting } = this.state;
        const filteredContacts = contacts.reduce(
            (res, curr) => {
                curr.favorite ? res.favorites.push(curr) : res.nonFavorites.push(curr)
                return res;
            },
            { favorites: [], nonFavorites: [] }
        );

        const orderedContacts = [
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
                    //Make sure the modal works as bootstrap
                    //TODO: Display this Modal using react portals
                    <Modal
                        title={`Deleting ${deleting.name}`}
                        message={`Are you sure you want to delete?`}
                        onDismiss={() => { this.setState({ deleting: null }) }}
                        onDelete={() => { this.onDelete(deleting.id) }}

                    />
                }
                <ContactsForm
                    className={classNames}
                    onAddContact={(newContact) => this.setState({
                        contacts: [...contacts, { ...newContact, id: nextId }],
                        nextId: nextId + 1,
                    })} />
                <ContactList
                    className={contactClass}
                    contacts={orderedContacts}
                    onDeleteContact={(targetId) => this.selectItemToDelete(targetId)}
                    onToggleFavorite={(targetId) => {
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

//TODO: Create utility function to manage inmutable state. Make a shallow copy.
//TODO: Create utility function to conditional add classes Give a series of classes and get the concatenated version . PAss an object which keys will be the class name and if set the class should to added to the element. Create a custom own version of CLSX
//TODO: Add types
//TODO: Use vanilla bootstrap for styling
