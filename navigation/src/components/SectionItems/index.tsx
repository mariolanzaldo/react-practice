import { PropsWithChildren, ReactElement } from "react";
import styles from "./style.module.css";

export interface Item {
    id: number;
    title: string;
    icon: ReactElement;
    link?: string
    badge?: number;
    items?: Item[];
}

interface SectionItemsProps {
   navbarOpen: boolean;
}

function SectionItems({ children, navbarOpen }: PropsWithChildren<SectionItemsProps>) {

    return (
        <ul
            className={navbarOpen ? `${styles.sidebarList}` : `${styles.sidebarListCollapsed}`}
        >
            {children}
        </ul>
    )
}

export default SectionItems;