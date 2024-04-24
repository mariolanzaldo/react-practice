// import { Field } from "./field.js";
import React from "react";
const create = React.createElement;
export class Form extends React.Component {
    // #count;
    constructor(props) {
        super(props);
        this.state = { name: "", phone: "" };
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();
        const { name, phone } = this.state;
        this.props.onAddContact({ name, phone });
        this.setState({ name: "", phone: "" });
    }
    render() {
        return (create("div", { className: 'form-container' }, create("form", { className: "new-contact", onSubmit: this.onSubmit }, React.createElement('div', null, React.createElement('label', { className: `Name` }, "Name"), React.createElement('div', null, React.createElement('input', {
            onChange: ({ target }) => {
                this.setState({ name: target.value });
            }
        }))), React.createElement('div', null, React.createElement('label', { className: `Phone` }, "Phone"), React.createElement('div', null, React.createElement('input', {
            onChange: ({ target }) => {
                this.setState({ phone: target.value });
            }
        }))), create("button", {}, "Add"))));
    }
}
;
