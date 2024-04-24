// import { Field } from "./field.js";
import React from "react";
import { ContactInterface } from "../app";

interface Props {
    contacts: ContactInterface[];
    onAddContact: (contact: {name: string; phone: string}) => void
}

interface State {
    name: string;
    phone: string;
}

const create = React.createElement;

export class Form extends React.Component <Props, State> {
    // #count;
    constructor(props: Props) {
        super(props);
        this.state = { name: "", phone: "" };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const { name, phone } = this.state;
        this.props.onAddContact({ name, phone });
        this.setState({ name: "", phone: "" });
    }

    render() {

        return (
            create("div", { className: 'form-container' },
                create("form", { className: "new-contact", onSubmit: this.onSubmit },
                    React.createElement(
                        'div',
                        null,
                        React.createElement('label', { className: `Name` }, "Name"),
                        React.createElement(
                            'div',
                            null,
                            React.createElement('input', {
                                onChange: ({ target }) => {
                                    this.setState({ name: target.value });
                                }
                            })
                        )
                    ),

                    React.createElement(
                        'div',
                        null,
                        React.createElement('label', { className: `Phone` }, "Phone"),
                        React.createElement(
                            'div',
                            null,
                            React.createElement('input', {
                                onChange: ({ target }) => {
                                    this.setState({ phone: target.value });
                                }
                            })
                        )
                    ),

                    create("button", {}, "Add"),
                )
            )
        );
    }
};