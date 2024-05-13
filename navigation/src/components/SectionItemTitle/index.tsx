import { PropsWithChildren } from "react";
import styles from './styles.module.css';


function SectionItemTitle({children}: PropsWithChildren) {

    return (
        <div
            className={styles.title}
          >
            {children}
          </div>
    );
}

export default SectionItemTitle;