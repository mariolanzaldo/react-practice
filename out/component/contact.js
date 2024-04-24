// const create = React.createElement;
import React from "react";
export class Contact extends React.Component {
    // #count;
    constructor(props) {
        super(props);
    }
    render() {
        const { contact } = this.props;
        return React.createElement('div', {}, React.createElement('h4', {}, `Name: ${contact.name}`), React.createElement('p', {}, `Phone: ${contact.phone}`));
    }
}
;
