import { Item } from "../SectionItems";
import styles from './style.module.css';
import ExpandMore from '../../assets/expand_more.svg?react';
import ExpandLess from '../../assets/expand_less.svg?react';
import SectionItemTitle from "../SectionItemTitle";
import SectionItemIcon from "../SectionItemIcon";
import Badge from "../Bagde";

interface  SectionElementProps {
    item: Item;
    navbarOpen: boolean;
    activeIndex: number | null;
    subNavOpen?: boolean;
    handleToggleMenu?: () => void;
    handleClick: (index: number | null) => void;
}

function SectionElement({ 
    item, 
    navbarOpen, 
    activeIndex, 
    handleClick, 
    handleToggleMenu, 
    subNavOpen,
  }: SectionElementProps) {
    const { icon, title, id, badge } = item;

    return (
      <li
      className={`${(activeIndex !== id) ? styles.inactive : styles.active} ${navbarOpen ? styles.row : styles.collapsedRow}` }
      onClick={() => {
        handleToggleMenu ? handleToggleMenu() : handleClick(id);
      }}
      >
        <div
          className={navbarOpen ? styles.item : styles.collapsedItem}
        >
          <SectionItemIcon>
            {icon}
          </SectionItemIcon>
         <SectionItemTitle>
            {title}
         </SectionItemTitle>
          {
            badge &&
           <Badge navbarOpen={navbarOpen}>
            {badge}
           </Badge>
          }
          { handleToggleMenu && 
          <div
            className={styles.multiLevelIcon}
          >
                {subNavOpen ? <ExpandLess /> : <ExpandMore/>}

          </div>

          }
      </div>
  </li>

      
    );
}

export default SectionElement;