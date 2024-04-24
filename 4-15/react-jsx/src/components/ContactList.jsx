import { Component } from "react";
import { Contact } from "./Contact";
// import { Serializable } from "./Serializable";

class ContactList extends Component {
    constructor(props) {
        super(props);
        // this.state = 
    }

    render() {
        const { onDeleteContact, onToggleFavorite, className } = this.props;
        return (
            <ul
                className={className}
            >
                {this.props.contacts.map(({ id, name, phone, favorite }) => (
                    <Contact
                        name={name}
                        phone={phone}
                        key={id}
                        favorite={favorite}
                        onDeleteContact={() => onDeleteContact(id)}

                        onToggleFavorite={() => onToggleFavorite(id)}
                    />
                ))}
            </ul>
        );
    }
}

export default ContactList;