import styles from './style.module.css';
import { PropsWithChildren, forwardRef } from 'react';
import MenuIcon from '../../assets/menu.svg?react';


interface SidebarProps{
  navbarOpen: boolean;
  handleClick: () => void;
  //TODO: Fix this and it should erase the issue at Navbar
  
  // ref: unknown
}

const Sidebar = forwardRef<HTMLDivElement, PropsWithChildren<SidebarProps>> (function Sidebar ({ navbarOpen, handleClick, children }, ref) {

  return(
      <div
      ref={ref}
        className={styles.sidebar}
      >
         <button
          className={navbarOpen ? `${styles.hideButton}`: `${styles.toggle}`}
          onClick={handleClick}
      >
          <MenuIcon />
      </button>
        { children }

      </div>
  )
});

export default Sidebar;