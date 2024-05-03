import { Item } from "../SectionItems";
import styles from './style.module.css';

function SectionItem({ icon, title}: Item) {

//   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//     event.stopPropagation();
// };
    return (
      <div
        className={styles.item}
        // onClick={handleClick}
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