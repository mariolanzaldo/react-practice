import { ReactElement, useState } from 'react';
import styles from './style.module.css';
import SectionItem from '../SectionItem';

export interface Item {
    title: string;
    icon: ReactElement;
    link?: string
}

interface SectionItemsProps {
   items: Item[];
}

function SectionItems({ items }: SectionItemsProps) {
    // const elRef = useRef<HTMLLIElement>(null);

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleItemClick = (index: number, link: string) => {
        
        // window.location.pathname = link;
        //Eventually you have to manage the link!
        console.log(link);
        setActiveIndex(index);
    };

  // const handleListItemClick = (index: number, link: string) => {
  //     return (event: React.MouseEvent<HTMLLIElement>) => {
  //         if (event.target === event.currentTarget) {
  //             // Only handle click if the event target is the list item itself, not its children
  //             handleItemClick(index, link);
  //         }
  //     };
  // };

    return(
        <ul
            className={styles.sidebarList}
          >
          {
            items.map(({  icon, title, link }, key) => {
              // console.log(activeIndex, key);
              return(
                <li
                    key={key} 
                    onClick={() => handleItemClick(key, link!)}
                    // onClick={handleListItemClick(key, link!)}
                    className={`${styles.row} ${activeIndex === key ? styles.active : ''}`}
                >
                 <SectionItem icon={icon} title={title} link={link}/>
                </li>
              )
            })
          }
          </ul> 
    );
}

export default SectionItems;