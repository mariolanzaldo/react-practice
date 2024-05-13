import { Item } from "../SectionItems";
import styles from './style.module.css';
import ExpandMore from '../../assets/expand_more.svg?react';
import ExpandLess from '../../assets/expand_less.svg?react';

interface  SectionElementProps {
    item: Item;
    navbarOpen: boolean;
    activeIndex: number | null;
    subNavOpen?: boolean;
    handleToggleMenu?: () => void;
    handleClick: (index: number | null) => void;
    multilevel?: boolean;
}

function SectionElement({ 
    item, 
    navbarOpen, 
    activeIndex, 
    handleClick, 
    handleToggleMenu, 
    subNavOpen,
    multilevel = false, //This can be used for boolean props
  }: SectionElementProps) {
    const { icon, title, id, badge } = item;

    return (
      <li
      className={`${(activeIndex !== id) ? styles.inactive : styles.active} ${navbarOpen ? styles.row : styles.collapsedRow}` }
      onClick={() => {
        (multilevel && handleToggleMenu) ? handleToggleMenu() : handleClick(id);
      }}
      >
        <div
          className={navbarOpen ? styles.item : styles.collapsedItem}
        >
          <div
           className={`${styles.icon}`}
          >
            {icon}
          </div>
          <div
            className={styles.title}
          >
            {title}
          </div>
          {
            badge &&
            <div
              className={navbarOpen ? styles.badge : styles.collapsedBadge}
            >
              {badge}
            </div>
          }
          { multilevel && 
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

//TODO: Create custom components to the inner parts of the navbar

export default SectionElement;