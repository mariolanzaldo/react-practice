import styles from './style.module.css';

interface SectionHeaderProps {
    headline: string;
}

function SectionHeader({ headline }: SectionHeaderProps) {
    return (
        <div
            className={styles.headline}
        >
            {headline}
        </div>
    );
}

export default SectionHeader;