// import { ReactNode } from 'react';
import styles from './style.module.css';

// interface DividerProps {
//     children: ReactNode;
// }

function Divider() {

    return(
        <div
            className={styles.container}
        >
            <div
                className={styles.border}
            >
            </div>
        </div>
    );
}

// -----------Or-------------
//TODO: Simplify this component

export default Divider;