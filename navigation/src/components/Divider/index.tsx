// import { ReactNode } from 'react';
import styles from './style.module.css';

// interface DividerProps {
//     children: ReactNode;
// }

function Divider() {
    return(
        <hr
            className={styles.divider}
        />
    );
}

export default Divider;