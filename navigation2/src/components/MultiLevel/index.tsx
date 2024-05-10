import { ReactNode } from "react";
// import SectionItems, { Item } from "../SectionItems";
import styles from './style.module.css';
// import ExpandMore from '../../../public/expand_more.svg?react';
// import ExpandLess from '../../../public/expand_less.svg?react';

interface MultiLevelProps {
    // id: number;
    // title: string;
    // icon: ReactElement;
    // items: Item[];
    // activeIndex: number | null;
    // setActiveIndex: (index: number | null) => void;
    // navbarOpen: boolean;
    children: ReactNode;
 }


function MultiLevel({ 
    // id, title, icon, items, activeIndex, setActiveIndex, navbarOpen
    children
}: MultiLevelProps) {
    // console.log(items, activeIndex, setActiveIndex);
    // const [isCollapsed, setIsCollapsed] = useState(true);

    // const handleClick = () => {
    //     setIsCollapsed(!isCollapsed);
    // }

    return(
        <div
            className={styles.container}
        >
            {/* <br />
            <br />

            <div
                key={id}
                onClick={handleClick}
                className={styles.parent}
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
                {isCollapsed ? <ExpandMore/> : <ExpandLess />}
            </div>
            <br /> */}

            {children}
            {/* <SectionItems items={items} navbarOpen={navbarOpen} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/> */}
            
        </div>  
    )
}

export default MultiLevel;