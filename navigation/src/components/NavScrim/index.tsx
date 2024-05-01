import { PropsWithChildren } from "react";
import styles from "../styles.module.css";

export default function NavScrim({ children }: PropsWithChildren) {

    return (
        <div
            className={styles.scrim}
        >
            {children}
        </div>
    )
}