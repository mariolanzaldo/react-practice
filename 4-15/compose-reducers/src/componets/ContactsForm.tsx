import { FormEvent, useReducer } from "react";
import { ContactInterface } from "./ContactsApp";
import customClsx from "../utility/customClasses";
import formReducer, { initialFormState } from "../state/formReducer";
import { resetForm, setName, setPhone } from "../state/actions/actionTypes";


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

function ContactsForm({ onAddContact, className }: ContactsFormProps) {

    const [formState, dispatch] = useReducer(formReducer, initialFormState);
    const {name, phone, isValidName, isValidPhone} = formState;

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if(isValidName && isValidPhone) {
            onAddContact({ name, phone });
            dispatch(resetForm())
        }
    };

    return (
    <form action=""
        onSubmit={handleSubmit}
    >
        <input
            type="text"
            name="contact-name"
            id="contact-name"
            value={name}
            placeholder="Name"
            // onChange={(e) => setName(e.target.value)}
            onChange={(e) => dispatch(setName(e.target.value))}
            className={customClsx('form-control', 'mt-2', 'mb-2')}

        ></input>
        <input
            type="text"
            name="contact-phone"
            id="contact-phone"
            value={phone}
            className={customClsx('form-control', 'mt-2', 'mb-2')}
            // onChange={(e) => setPhone(e.target.value)}
            onChange={(e) => dispatch(setPhone(e.target.value))}

            placeholder="Phone"
        ></input>
        <button
            className={customClsx(
                className,
                {
                    disabled:
                    !isValidName ||
                    !isValidPhone
                }
            )
            }  
        >
            Add
        </button>
    </form>
    ); 
}

export default ContactsForm;