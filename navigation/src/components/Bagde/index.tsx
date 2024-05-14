import { PropsWithChildren } from "react";
import styles from "./style.module.css";

interface BadgeProps {
    navbarOpen: boolean;
}

function Badge({ children, navbarOpen}: PropsWithChildren<BadgeProps>) {
    return(
        <div
        className={navbarOpen ? styles.badge : styles.collapsedBadge}
      >
        {children}
      </div>
    )
}

export default Badge;