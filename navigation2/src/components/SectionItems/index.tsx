import { ReactElement } from 'react';
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
   activeIndex: number | null;
   setActiveIndex: (index: number | null) => void;
}

function SectionItems({ items, navbarOpen, activeIndex, setActiveIndex }: SectionItemsProps) {

    const handleItemClick = (index: number, link: string) => {
      console.log(link);
      setActiveIndex(index);
  };


    return(
        <ul
            className={styles.sidebarList}
          >
          {
            items.map(({  icon, title, link, id }) => {

              return(
                <li

                    key={id} 
                    onClick={() => handleItemClick(id, link!)}
                    className={`${styles.row} ${(activeIndex !== id) ? styles.inactive : styles.active}`}
                >
                 <SectionItem item={{icon, title, link, id}} navbarOpen={navbarOpen}/>
                </li>
              )
            })
          }
          </ul> 
    );
}

export default SectionItems;