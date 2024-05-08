import { ReactNode } from 'react';
import styles from './style.module.css';

interface DividerProps {
    children: ReactNode;
}

function Divider({ children }: DividerProps) {

    return(
        <div
            className={styles.container}
        >
            <div
                className={styles.border}
            >
            </div>
            <span 
                className={styles.container}
            >
                {children}
            </span>

        </div>
    );
}

// -----------Or-------------
//TODO: Simplify this component

export default Divider;