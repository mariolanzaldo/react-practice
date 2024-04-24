import { ContactList } from "./component/contactList.js";
import { Form } from "./component/form.js";
import React from "react";
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                {
                    name: 'John',
                    phone: '1234'
                }
            ]
        };
    }
    render() {
        return (React.createElement("div", { className: 'container' }, 
        // React.createElement(Counter, {}),
        React.createElement(Form, {
            contacts: this.state.contacts,
            onAddContact: (newContact) => this.setState({
                contacts: [...this.state.contacts, { ...newContact }],
            })
        }), React.createElement(ContactList, { contacts: this.state.contacts })));
    }
}
;
