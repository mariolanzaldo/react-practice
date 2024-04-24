import { Component, FormEvent } from "react";
import customClsx from "../utility/customClasses";
import { ContactInterface } from "./Contacts.app";

export interface ContactsFormProps {
    onAddContact: (contact: ContactInterface) => void;
    className?: string;
}

export interface ContactsFormState {
    name: string;
    phone: string;
    isNameValid?: boolean;
    isPhoneValid?: boolean;
}

export class ContactsForm extends Component<ContactsFormProps, ContactsFormState> {
    constructor(props: ContactsFormProps) {
        super(props);

        this.state = { name: "", phone: "", isNameValid: true,
        isPhoneValid: true };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const { name, phone } = this.state;

        if(this.validateName(name) && this.validatePhone(phone)) {
            this.props.onAddContact({ name, phone });
            this.setState({ name: "", phone: "" });
        }
    }

    validateName(name: string): boolean {
        const nameRegex = /^[A-Za-z\s\-']+$/;
        return nameRegex.test(name);
    }

    validatePhone(phone: string): boolean {
        const phoneRegex = /^\d{8}$/;

        return phoneRegex.test(phone.toString());
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
                    className={customClsx(
                        className,
                        {
                            disabled:
                            !this.validateName(name) ||
                            !this.validatePhone(phone)
                        }
                    )
                    }

                    
                >Add</button>
            </form>
        );
    }
}
//TODO: Add a confirmation when you want to delete a contact using a modal window. Take a look of react portals