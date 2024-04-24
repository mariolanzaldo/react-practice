
import Contact from "./Contact";
import { ContactInterface } from "./ContactsApp";
// import { Serializable } from "./Serializable";

export interface ContactListProps {
    contacts: ContactInterface[];
    onDeleteContact: (id: number) => void;
    onToggleFavorite: (id: number) => void;
    className?: string;
} 

function ContactList({ contacts, onToggleFavorite, onDeleteContact}: ContactListProps) {
    return (
        <ul
            // className={className}
        >
            {contacts.map(({ id, name, phone, favorite }: ContactInterface) => (
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

export default ContactList;