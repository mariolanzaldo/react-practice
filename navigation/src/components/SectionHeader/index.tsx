import { PropsWithChildren } from 'react';
import styles from './style.module.css';

// interface SectionHeaderProps {
//     children: PropsWithChildren<ReactNode>;
// }

//TODO: Fix this usage through all  the app

function SectionHeader({ children }: PropsWithChildren) {
    return (
        <div
            className={styles.headline}
        >
            {children}
        </div>
    );
}

export default SectionHeader;