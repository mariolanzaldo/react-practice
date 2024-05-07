import { ReactElement, useState } from 'react';
import styles from './style.module.css';
import SectionItem from '../SectionItem';

export interface Item {
    id: number;
    title: string;
    icon: ReactElement;
    link?: string
}

interface SectionItemsProps {
   items: Item[];
   navbarOpen: boolean;
}

function SectionItems({ items, navbarOpen }: SectionItemsProps) {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleItemClick = (index: number, link: string) => {
      console.log(link);
      // console.log(index);
      setActiveIndex(index);


      // if (activeIndex === index) {
      //     setActiveIndex(null);
      // } else {
      //     setActiveIndex(index);
      // }
  };

    return(
        <ul
            className={styles.sidebarList}
          >
          {
            items.map(({  icon, title, link, id }, index) => {
              return(
                <li
                    key={index} 
                    onClick={() => handleItemClick(index, link!)}
                    className={`${styles.row} ${(activeIndex === index) ? styles.active : styles.inactive}`}
                >
                 <SectionItem item={{icon, title, link, id}} navbarOpen={navbarOpen}/>
                </li>
              )
            })
          }

          {/* {
            !Array.isArray(items) && 
          } */}
          </ul> 
    );
}

export default SectionItems;