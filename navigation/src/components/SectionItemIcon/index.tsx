import { PropsWithChildren } from "react";
import styles from "./style.module.css";

function SectionItemIcon ({ children }: PropsWithChildren) {

    return (
        <div
            className={styles.icon}
          >
            {children}
          </div>
    )
}

export default SectionItemIcon;