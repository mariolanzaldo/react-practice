import { PropsWithChildren, ReactNode, useEffect, useState, useRef } from "react";
import styles from './style.module.css';

interface CollapseProps {
    children: PropsWithChildren<ReactNode>;
    subNavOpen: boolean;
}



function Collapse({ children, subNavOpen }: CollapseProps) {
    const collapseRef = useRef<HTMLDivElement>(null);

    const [initialCollapseRender , setInitialCollapseRender] = useState(true);

    useEffect(() => {
                setInitialCollapseRender(false)
                toogleItems();

            }, [subNavOpen]);

    const toogleItems = () => {
        
            if(!initialCollapseRender && subNavOpen) {
                collapseRef.current!.classList.remove(styles.multiItemClose);
                collapseRef.current!.classList.toggle(styles.multiItemShow);
            } 

            if(!initialCollapseRender && !subNavOpen) {
                collapseRef.current!.classList.remove(styles.multiItemShow);
                collapseRef.current!.classList.toggle(styles.multiItemClose);
            }

            
    } 

    toogleItems();
    return(
        <div
            ref={collapseRef}
            className={styles.multiItem}
        >
            {
            children
            }
        </div>
    )
}

export default Collapse;