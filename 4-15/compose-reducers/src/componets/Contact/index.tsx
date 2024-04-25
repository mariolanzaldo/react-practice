import { useState } from "react";
import PhoneNumber from "../Phone";
import customClsx from "../../utility/customClasses";
import styles from "./styles.module.css";


export interface ContactProps {
    name: string;
    phone: string;
    favorite?: boolean;
    onDeleteContact?: () => void;
    onToggleFavorite: () => void;
}

function Contact ({ name, phone, favorite, onToggleFavorite, onDeleteContact }: ContactProps) {

    const [isPhoneHidden, setIsPhoneHidden] = useState<boolean>(false);

    return(
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
                            onClick={() => setIsPhoneHidden(!isPhoneHidden)}>
                            Phone: {!isPhoneHidden && <PhoneNumber phone={phone} />}
                        </p>
                    </div>
                    <button className={customClsx("btn", "btn-danger")} onClick={onDeleteContact}>Delete</button>
                </div>
            </li>
    );
}

export default Contact;