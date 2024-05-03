import { useEffect, useRef, useState } from "react";
import Sidebar from "../Sidebar";
import styles from './style.module.css';
// import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    const [ navbarOpen, setNavbarOpen] = useState(false);
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

        // Add event listener to the document body
        document.body.addEventListener('click', handleOutsideClick);

        return () => {
            // Cleanup: remove event listener when component unmounts
            document.body.removeEventListener('click', handleOutsideClick);
        };
    }, [navbarOpen]);

    return(
        < div
            className={navbarOpen ? styles.navbar: styles.collapsedbar}
        >


        <Sidebar
            ref={sidebarRef}
              navbarOpen={navbarOpen}
              handleClick={handleClick}/>
        <div
            // className={styles.scrim}
            className={navbarOpen ? `${styles.scrim} ${styles.showScrim}` : `${styles.scrim} ${styles.closeScrim}`}
            onClick={handleClick}

        >
        </div>

        </ div>
    );
}

export default Navbar;