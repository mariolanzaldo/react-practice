import { useEffect, useRef, useState } from "react";
import Sidebar from "../Sidebar";
import styles from './style.module.css';
import { sidebarData } from "../../sidebarData";
import SectionHeader from "../SectionHeader";
import SectionItems from "../SectionItems";
import Divider from "../Divider";

function Navbar() {
    const [ navbarOpen, setNavbarOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null)
    const handleClick = () => {
            setNavbarOpen(!navbarOpen);
    }

    const largeNavbar = sidebarData.map(({ label, items }, index) => (
        <div
          key={index}
        >

          <SectionHeader headline={label} />
          <SectionItems items={items} navbarOpen={navbarOpen}/>
          {(sidebarData.length - 1 > index) ? <Divider> </Divider>  : null }          
        </div>
      ));

      const smallNavbar = <SectionItems items={sidebarData[0].items} navbarOpen={navbarOpen}/>

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
    }, [navbarOpen]);

    return(
        < div
            className={navbarOpen ? styles.navbar: styles.collapsedbar}
        >

        <Sidebar
            ref={sidebarRef}
              navbarOpen={navbarOpen}
              handleClick={handleClick}>

        {
            navbarOpen && largeNavbar
        } 
        {
            !navbarOpen && smallNavbar
        }
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