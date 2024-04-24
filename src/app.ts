import { ContactList } from "./component/contactList.js";
import { Counter } from "./component/counter.js";
import { Form } from "./component/form.js";
import React from "react";

export interface ContactInterface {
    name: string;
    phone: string;
}

interface AppState {
    contacts: ContactInterface[];
}


export class App extends React.Component<{}, AppState>{
    constructor(props: {}) {
        super(props);
        this.state = {
            contacts: [
                {
                    name: 'John',
                    phone: '1234'
                }
            ]
        }
    }


    render() {
        return (
            React.createElement("div", { className: 'container' },
                // React.createElement(Counter, {}),
                React.createElement(Form, {
                    contacts: this.state.contacts,
                    onAddContact: (newContact: ContactInterface) => this.setState({
                        contacts: [...this.state.contacts, { ...newContact }],
                    })
                }),
                React.createElement(ContactList, { contacts: this.state.contacts }),
            )
        );
    }
};