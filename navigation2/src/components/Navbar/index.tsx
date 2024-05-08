import { ReactNode, useEffect, useRef } from "react";
import Sidebar from "../Sidebar";
import styles from './style.module.css';

interface NavbarProps {
    children: ReactNode;
    setNavbarOpen: (arg: boolean) => void;
    navbarOpen: boolean;
}

function Navbar({ children, navbarOpen, setNavbarOpen }: NavbarProps) {
    const sidebarRef = useRef<HTMLDivElement>(null)
    const handleClick = () => {
            setNavbarOpen(!navbarOpen);
    }

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (navbarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setNavbarOpen(false);
            }
        };

        document.body.addEventListener('click', handleOutsideClick);

        return () => {
            document.body.removeEventListener('click', handleOutsideClick);
        };
    }, [navbarOpen, setNavbarOpen]);

    return(
        < div
            className={navbarOpen ? styles.navbar: styles.collapsedbar}
        >

        <Sidebar
            ref={sidebarRef}
              navbarOpen={navbarOpen}
              handleClick={handleClick}>
        {children}
        </Sidebar>
        <div
            className={navbarOpen ? `${styles.scrim} ${styles.showScrim}` : `${styles.scrim} ${styles.closeScrim}`}
            onClick={handleClick}
        >
        </div>

        </ div>
    );
}

export default Navbar;