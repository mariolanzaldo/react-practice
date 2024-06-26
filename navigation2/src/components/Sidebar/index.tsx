import styles from './style.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import { ReactNode, forwardRef } from 'react';


interface SidebarProps{
  navbarOpen: boolean;
  handleClick: () => void;
  children: ReactNode;
  // ref: unknown
}

const Sidebar = forwardRef<HTMLDivElement, SidebarProps> (function Sidebar ({ navbarOpen, handleClick, children }, ref) {

  return(
      <div
      ref={ref}
        className={styles.sidebar}
        // className={`${styles.sidebar} ${navbarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}
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