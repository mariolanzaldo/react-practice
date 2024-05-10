// import MultiLevel from "../MultiLevel";
import { Item } from "../SectionItems";
import styles from './style.module.css';

interface SectionItemProps {
  item: Item;
  navbarOpen: boolean;
  // activeIndex: number | null;
  // setActiveIndex: () => void;
}

function SectionItem({ item, navbarOpen}: SectionItemProps) {
  const { icon, title, items } = item;
  console.log(items);
    return (
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
        {/* <MultiLevel>

        </MultiLevel> */}
      
      </div>
    );
}

export default SectionItem;