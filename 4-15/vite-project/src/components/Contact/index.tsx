import { Component } from "react";
import styles from "./styles.module.css";
import { PhoneNumber } from "../Phone";
import customClsx from "../../utility/customClasses";
// import { Serializable } from "../Serializable";

export interface ContactProps {
    name: string;
    phone: string;
    favorite: boolean;
    onDeleteContact: () => void;
    onToggleFavorite: () => void;
}

export interface ContactState {
    isPhoneHidden: boolean;
}

export class Contact extends Component<ContactProps, ContactState> {
    constructor(props: ContactProps) {
        super(props);

        this.state = { isPhoneHidden: false };
    }

    getKey() {

    }

    render() {
        const { isPhoneHidden } = this.state;
        const { name, phone, favorite, onDeleteContact, onToggleFavorite } = this.props;
        return (
            <li className={customClsx(`${styles.contact}`, "mt-3")}>
                <div className={customClsx("card", "mb-3")}>
                    <div
                        className={customClsx("card-body", "d-flex", "flex-column", `${favorite ? styles.favorite : ""}`, "justify-content-center")}>
                        <h5
                            className={customClsx("card-title", "ml-2")}
                            onClick={onToggleFavorite}>
                            Name: {name}
                        </h5>
                        <p
                            className={customClsx("card-text")}
                            onClick={() => this.setState({ isPhoneHidden: !isPhoneHidden })}>
                            Phone: {!isPhoneHidden && <PhoneNumber phone={phone} />}
                        </p>
                    </div>
                    <button className={customClsx("btn", "btn-danger")} onClick={onDeleteContact}>Delete</button>
                </div>
            </li>
        );
    }
}