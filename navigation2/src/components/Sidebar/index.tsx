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

// function Sidebar ({ navbarOpen, handleClick }: SidebarProps) {
//     return(
//         <div
//           className={styles.sidebar}
//         >
//            <button
//             className={navbarOpen ? `${styles.hideButton}`: `${styles.toggle}`}
//             onClick={handleClick}
//         >
//             <MenuIcon />
//         </button>
//           {
//             sidebarData.map(({ label, items }, index) => (
//               <div
//                 key={index}
//               >
//                 {navbarOpen ? <SectionHeader headline={label} /> : null }
//                 <SectionItems items={items} />
//                 {(sidebarData.length - 1 > index && navbarOpen) ? <Divider> </Divider> : null}              
//               </div>
//             ))
//           }
//         </div>
//     )
// }

const Sidebar = forwardRef<HTMLDivElement, SidebarProps> (function Sidebar ({ navbarOpen, handleClick }, ref) {
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
        {
          sidebarData.map(({ label, items }, index) => (
            <div
              key={index}
            >
              {navbarOpen ? <SectionHeader headline={label} /> : null }
              <SectionItems items={items} />
              {(sidebarData.length - 1 > index && navbarOpen) ? <Divider> </Divider> : null}              
            </div>
          ))
        }
      </div>
  )
});

export default Sidebar;