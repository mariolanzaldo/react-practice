import { useRef, useState } from "react";
import styles from "./style.module.css";
import delay from "../utils/delayFn";


interface SwitchProps {
    onChange: () => void;
    toggled: boolean;
}

function Switch2({ onChange, toggled }: SwitchProps) {

    const [isOn, setIsOn] = useState(false);

    console.log(toggled);
    // console.log(onChange);

    const switchRef = useRef<HTMLButtonElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const handleRef = useRef<HTMLDivElement>(null);
    // const inputRef = useRef<HTMLInputElement>(null);
    const handleClick = async function () {

        if(!isOn) {
            console.log("OFF")
            handleRef.current?.classList.toggle(styles.innerFocus);
            await delay(100);
            trackRef.current?.classList.toggle(styles.translateHover);
            switchRef.current?.classList.toggle(styles.handleActiveFirst);
            handleRef.current?.classList.toggle(styles.activeMark);
            handleRef.current?.classList.remove(styles.innerFocus);

            // setIsOn(!isOn);

        } else if(isOn) {
            console.log("ON!");
            
            handleRef.current?.classList.toggle(styles.innerFocus);
            await delay(100);
            switchRef.current?.classList.toggle(styles.handleDeactive);
            trackRef.current?.classList.toggle(styles.translateLeftHover);
            // handleRef.current?.classList.remove(styles.activeMark);
            // setIsOn(!isOn);

        }

        setIsOn(!isOn);
        onChange();



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
        {/* <input
            ref={inputRef} 
            type="checkbox" 
            aria-hidden="true" 
            className={styles.checkbox}
        /> */}
      </button>
    );
}

export default Switch2