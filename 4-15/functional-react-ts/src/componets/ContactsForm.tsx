import { FormEvent, useState } from "react";
import { ContactInterface } from "./ContactsApp";
import customClsx from "../utility/customClasses";


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
    
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [isNameValid, setIsNameValid] = useState<boolean>(true);
    const [isPhoneValid, setIsPhoneValid] = useState<boolean>(true);

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if (validateName(name) && validatePhone(phone)) {
            onAddContact({ name, phone });
            setName("");
            setPhone("");
        }
    };

    const validateName = (name: string): boolean => {
        const nameRegex = /^[A-Za-z\s\-']+$/;
        const isValid = nameRegex.test(name);
        setIsNameValid(isValid);
        return isValid;
    };

    const validatePhone = (phone: string): boolean => {
        const phoneRegex = /^\d{8}$/;
        const isValid = phoneRegex.test(phone);
        setIsPhoneValid(isValid);
        return isValid;
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
            onChange={(e) => setName(e.target.value)}
            className={customClsx('form-control', 'mt-2', 'mb-2')}

        ></input>
        <input
            type="text"
            name="contact-phone"
            id="contact-phone"
            value={phone}
            className={customClsx('form-control', 'mt-2', 'mb-2')}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
        ></input>
        <button
            className={customClsx(
                className,
                {
                                disabled:
                                !isNameValid ||
                                !isPhoneValid
                            }
            )
            }

            
        >Add</button>
    </form>
    ); 
}

export default ContactsForm;