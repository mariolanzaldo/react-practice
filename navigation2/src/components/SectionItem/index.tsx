import { Item } from "../SectionItems";
import styles from './style.module.css';

interface SectionItemProps {
  item: Item;
  navbarOpen: boolean
}

function SectionItem({ item, navbarOpen}: SectionItemProps) {
  const { icon, title } = item;

    return (
      <div
        className={navbarOpen ? styles.item : styles.collapsedItem}
      >
        <div
          className={styles.icon}
        >
          {icon}
        </div>
        <div
          className={styles.title}
        >
          {title}
        </div>
      
      </div>
    );
}

export default SectionItem;