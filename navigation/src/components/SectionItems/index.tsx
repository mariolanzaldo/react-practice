import { ReactElement, ReactNode } from "react";
import styles from "./style.module.css";

export interface Item {
    id: number;
    title: string;
    icon: ReactElement;
    link?: string
    items?: Item[];
}

interface SectionItemsProps {
    children: ReactNode;
//    items: Item[];
   navbarOpen: boolean;
//    activeIndex: number | null;
//    setActiveIndex: (index: number | null) => void;
}

function SectionItems({ children, navbarOpen }: SectionItemsProps) {

    return (
        <ul
            className={navbarOpen ? `${styles.sidebarList}` : `${styles.sidebarListCollapsed}`}
        >
            {children}
        </ul>
    )
}

export default SectionItems;