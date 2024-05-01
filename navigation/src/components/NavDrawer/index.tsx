import { PropsWithChildren } from "react";
import styles from "../styles.module.css";

function NavigationDrawer ({ children }: PropsWithChildren) {
    // const [drawers, setDrawers]  = useState(["a", "b", "c"]);
    return (

        <div 
            className={styles.container}
        >
         {children}
        </div>
       
    );
}

export default NavigationDrawer;