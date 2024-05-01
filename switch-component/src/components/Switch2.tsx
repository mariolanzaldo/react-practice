import { ChangeEvent, useRef, useState } from "react";
import styles from "./style.module.css";
import delay from "../utils/delayFn";


interface SwitchProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    toggled: boolean;
}

function Switch2({ onChange, toggled }: SwitchProps) {

    const [isOn, setIsOn] = useState(false);

    console.log(toggled);
    console.log(onChange);

    const switchRef = useRef<HTMLButtonElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const handleRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const handleClick = async function () {

        if(!isOn) {
            handleRef.current?.classList.toggle(styles.innerFocus);
            await delay(200);
            trackRef.current?.classList.toggle(styles.translateHover);
            switchRef.current?.classList.toggle(styles.handleActiveFirst);
            handleRef.current?.classList.toggle(styles.activeMark);

        } else {
            console.log("ON!");

        }

        setIsOn(!isOn);



    }

    return (
        <button 
            className={styles.switch}
            ref={switchRef}
            onClick={handleClick}
        >
        <div 
            ref={trackRef}
            className={styles.track}
        >
            <div 
                ref={handleRef}
                className={styles.handle}
             >
                <div 
                    // ref={}
                    className={styles.icons}
                >
                </div>
          </div>
        </div>
        <input
            ref={inputRef} 
            type="checkbox" 
            aria-hidden="true" 
            className={styles.checkbox}
            onChange={onChange}
        />
      </button>
    );
}

export default Switch2