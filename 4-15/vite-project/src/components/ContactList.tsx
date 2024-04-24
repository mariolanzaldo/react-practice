import { Component } from "react";
import { Contact } from "./Contact";
import { ContactInterface } from "./Contacts.app";
// import { Serializable } from "./Serializable";

export interface ContactListProps {
    contacts: ContactInterface[];
    onDeleteContact: (id: number) => void;
    onToggleFavorite: (id: number) => void;
    className?: string;
} 

class ContactList extends Component<ContactListProps> {
    // constructor(props) {
    //     super(props);
    //     // this.state = 
    // }

    render() {
        const { onDeleteContact, onToggleFavorite, className } = this.props;
        return (
            <ul
                className={className}
            >
                {this.props.contacts.map(({ id, name, phone, favorite }: ContactInterface) => (
                    <Contact
                        name={name}
                        phone={phone}
                        key={id}
                        favorite={favorite!}
                        onDeleteContact={() => onDeleteContact(id!)}

                        onToggleFavorite={() => onToggleFavorite(id!)}
                    />
                ))}
            </ul>
        );
    }
}

export default ContactList;