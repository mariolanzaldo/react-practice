import { Component } from "react";
import customClsx from "../utility/customClasses";

export class ContactsForm extends Component {
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

        const { name, phone } = this.state;
        const { className } = this.props;
        return (
            <form action=""
                onSubmit={this.onSubmit}
            // className={className}
            >
                <input
                    type="text"
                    name="contact-name"
                    id="contact-name"
                    value={name}
                    placeholder="Name"

                    onChange={({ target }) => {

                        this.setState({ name: target.value });
                    }}
                    className={customClsx('form-control', 'mt-2', 'mb-2')}

                ></input>
                <input
                    type="text"
                    name="contact-phone"
                    id="contact-phone"
                    value={phone}
                    className={customClsx('form-control', 'mt-2', 'mb-2')}
                    onChange={({ target }) => {

                        this.setState({ phone: target.value });
                    }}
                    placeholder="Phone"
                ></input>
                <button
                    className={className}
                >Add</button>
            </form>
        );
    }
}
//TODO: Disable the button if any data is not valid and the inputs should reflect this condition
//TODO: Add validation
//TODO: Add a confirmation when you want to delete a contact using a modal window. Take a look of react portals