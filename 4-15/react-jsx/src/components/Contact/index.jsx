import { Component } from "react";
import styles from "./styles.module.css";
import { PhoneNumber } from "../Phone";
import customClsx from "../../utility/customClasses";
// import { Serializable } from "../Serializable";

export class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = { isPhoneHidden: false };
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