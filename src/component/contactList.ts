// const create = React.createElement;

import { Contact } from "./contact";
import { ContactInterface } from "../app";
import React, { Component, ReactElement } from 'react';

interface Props {
    contacts: ContactInterface[];
}

export class ContactList extends Component<Props> {
    // #count;
    constructor(props: Props) {
        super(props);

    }

    render(): ReactElement {
        const contactEls: ReactElement[] = this.props.contacts.map((contact) => {
            return React.createElement(Contact, { contact: contact, key: contact.name });
        });

        return React.createElement(
            'div',
            null,
            contactEls
        );
    }
};