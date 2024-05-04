import styles from './style.module.css';
import { sidebarData } from  '../../sidebarData';
import SectionHeader from '../SectionHeader';
import SectionItems from '../SectionItems';
import Divider from '../Divider';
import MenuIcon from '@mui/icons-material/Menu';
import { forwardRef } from 'react';


interface SidebarProps{
  navbarOpen: boolean;
  handleClick: () => void;
  // ref: unknown
}

const Sidebar = forwardRef<HTMLDivElement, SidebarProps> (function Sidebar ({ navbarOpen, handleClick }, ref) {

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
        {
          sidebarData.map(({ label, items }, index) => (
            <div
              key={index}
            >

              {navbarOpen ? <SectionHeader headline={label} /> : null }
              <SectionItems items={items} navbarOpen={navbarOpen}/>
              {(sidebarData.length - 1 > index && navbarOpen) ? <Divider> </Divider> : null}              
            </div>
          ))
        }

      </div>
  )
});

export default Sidebar;