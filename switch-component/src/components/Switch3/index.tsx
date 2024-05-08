import { ReactNode, useRef, useState } from "react";
import styles from "./style.module.css";
// import delay from "../../utils/delayFn";
// import  Done from "../../../public/done.svg?react";
import delay from "../../utils/delayFn";


interface SwitchProps {
    onChange: (check?: boolean) => void;
    toggled: boolean;
    icon1: ReactNode;
    icon2: ReactNode;
}

function Switch3({ onChange, toggled, icon1, icon2 }: SwitchProps) {
    console.log(toggled);

    const [isOn, setIsOn] = useState(false);
    const [icon, setIcon] = useState<ReactNode | null>(icon2);

    const switchRef = useRef<HTMLButtonElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const handleRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const handleClick = async function () {

        if(!isOn) {
            if(icon){
                handleRef.current?.classList.add(styles.handleIcon);

            } 
                
            handleRef.current?.classList.toggle(styles.growHandle);
            await delay(500);
            handleRef.current?.classList.toggle(styles.translateHandle);
            await delay(500);
            trackRef.current?.classList.toggle(styles.trackActive);
            handleRef.current?.classList.toggle(styles.activeShrink);
            handleRef.current?.classList.remove(styles.translateHandle);
            handleRef.current?.classList.remove(styles.growHandle);
            setIcon(icon1);

        } else {
            handleRef.current?.classList.toggle(styles.growActiveHandle);
            handleRef.current?.classList.toggle(styles.translateBackHandle);
            await delay(500);
            // trackRef.current?.classList.remove(styles.trackActive);
            trackRef.current?.classList.remove(styles.trackActive);
            handleRef.current?.classList.remove(styles.activeShrink);
            handleRef.current?.classList.remove(styles.growActiveHandle);
            handleRef.current?.classList.toggle(styles.deactiveShrink);
            handleRef.current?.classList.remove(styles.deactiveShrink);
            handleRef.current?.classList.remove(styles.translateBackHandle);
            setIcon(icon2);

            if(icon) {
                handleRef.current?.classList.add(styles.deactiveIcon);

            }
                

        }
        onChange();

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
                className={icon ? styles.handle : styles.handleIcon}
             >
                <div 
                    className={styles.icons}
                >
                    {
                        icon ? icon : null
                    }

                </div>
          </div>
        </div>
        <input
            ref={inputRef} 
            type="checkbox" 
            aria-hidden="true" 
            className={styles.checkbox}
            // onChange={(e) => onChange(e.target.checked)}
        />
      </button>
    );
}

export default Switch3;