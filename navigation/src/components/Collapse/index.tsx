import { PropsWithChildren, ReactNode } from "react";
import styles from './style.module.css';

interface CollapseProps {
    children: PropsWithChildren<ReactNode>;
    subNavOpen: boolean;
}



function Collapse({ children, subNavOpen }: CollapseProps) {
    return(
        <div
            className={subNavOpen ? styles.multiItem : styles.multiItemClose}
        >
            {
            children
            }
        </div>
    )
}

export default Collapse;