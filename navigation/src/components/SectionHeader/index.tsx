import { PropsWithChildren, ReactNode } from 'react';
import styles from './style.module.css';

interface SectionHeaderProps {
    children: PropsWithChildren<ReactNode>;
}

function SectionHeader({ children }: SectionHeaderProps) {
    return (
        <div
            className={styles.headline}
        >
            {children}
        </div>
    );
}

export default SectionHeader;