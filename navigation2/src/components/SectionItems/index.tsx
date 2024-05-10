import { ReactElement } from 'react';
import styles from './style.module.css';
import SectionItem from '../SectionItem';
// import MultiLevel from '../MultiLevel';

export interface Item {
    id: number;
    title: string;
    icon: ReactElement;
    link?: string
    items?: Item[];
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
            items.map(({  icon, title, link, id, items }) => {
              return(
                <li

                    key={id} 
                    onClick={() => handleItemClick(id, link!)}
                    className={`${styles.row} ${(activeIndex !== id) ? styles.inactive : styles.active}`}
                >

                  <SectionItem item={{icon, title, link, id, items}} navbarOpen={navbarOpen}/>
                 {/* { items && items.length > 0 ? 
                 <MultiLevel  setActiveIndex={setActiveIndex} activeIndex={activeIndex} items={items} navbarOpen={navbarOpen} icon={icon} title={title} id={id}/> : <SectionItem item={{icon, title, link, id}} navbarOpen={navbarOpen}/>} */}
                </li>
              )
            })
          }
          </ul> 
    );
}

export default SectionItems;