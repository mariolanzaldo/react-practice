// const create = React.createElement;
import React, { Component, ReactElement } from "react";

interface ContactProps {
    contact: {
        name: string;
        phone: string;
    }
    key: string;
}

export class Contact extends React.Component<ContactProps> {
    // #count;
    constructor(props: ContactProps) {
        super(props);

    }

    render(): ReactElement {
        const { contact } = this.props;

        return React.createElement('div', {},
            React.createElement('h4', {}, `Name: ${contact.name}`),
            React.createElement('p', {}, `Phone: ${contact.phone}`),
        );
    }
};