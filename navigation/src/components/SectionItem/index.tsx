import { Item } from "../SectionItems";
import styles from './style.module.css';
import ExpandMore from '../../../public/expand_more.svg?react';
import ExpandLess from '../../../public/expand_less.svg?react';

interface  SectionElementProps {
    item: Item;
    navbarOpen: boolean;
    activeIndex: number | null;
    // setActiveIndex: (index: number | null) => void;
    subNavOpen?: boolean;
    handleToggleMenu?: () => void;
    handleClick: (index: number | null) => void;
    multilevel: boolean;
}

function SectionElement({ 
    item, 
    navbarOpen, 
    activeIndex, 
    handleClick, 
    handleToggleMenu, 
    subNavOpen,
    multilevel,
  }: SectionElementProps) {
    const { icon, title, id } = item;

    // const handleClick = () => {

    // }
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

          { multilevel &&
          <div
            className={styles.multiLevelIcon}
          >
                {subNavOpen ? <ExpandMore/> : <ExpandLess />}

          </div>

          }
      </div>
  </li>

      
    );
}

export default SectionElement;