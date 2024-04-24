// const create = React.createElement;
import { Contact } from "./contact";
import React, { Component } from 'react';
export class ContactList extends Component {
    // #count;
    constructor(props) {
        super(props);
    }
    render() {
        const contactEls = this.props.contacts.map((contact) => {
            return React.createElement(Contact, { contact: contact, key: contact.name });
        });
        return React.createElement('div', null, contactEls);
    }
}
;
