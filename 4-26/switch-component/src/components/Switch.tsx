// import { useRef, useState } from "react";
import { ChangeEvent } from "react";
import styles from "./style.module.css";

type SwitchProps = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

// function Container() {
//     // const [isChecked, setIsChecked] = useState(false); 
//     // const track = useRef(null);
//     // const handle = useRef(null);

//     // function handleChange() {
//     //     setIsChecked(!isChecked)
//     //     track.current && track.current.classList.toggle(styles.enable);
//     // }

//     return(

//         // <> 
//         //    <button className={styles.switch}>
//         //         <div className={styles.track}>
    
//         //             <div className={styles.handle}>
    
//         //                 {/* <div class="icons">
//         //                 </div> */}
//         //             </div>
//         //         </div>
//         //         <input type="checkbox" aria-hidden="true" />
//         //     </button>
//         // </>
//     )
// }

// export default Container;

// function Switch() {
//     const [isChecked, setIsChecked] = useState(false);

//     const handleToggle = () => {
//         setIsChecked(!isChecked);
//     };

//     return (
//         <div
//             className={`${styles.switch} ${isChecked ? styles.selected : styles.unselected}`}
//             onClick={handleToggle}
//         >
//             <div className={styles.track}>
//                 <div className={styles.handle}></div>
//             </div>
//             <input type="checkbox" aria-hidden="true" checked={isChecked} readOnly />
//         </div>
//     );
// }



function Switch({ onChange }: SwitchProps) {

    return (
        <label
        className={styles.div}
        >
            <input 
            className={styles.input}
            type="checkbox"
            onChange={onChange} 
            />
            <span
            className={styles.span}
            ></span>

        </label>
    )
}

export default Switch;

//TODO: Finish this component exactly as materialUI spec
//TODO: When it clicks it should be switch between two values(default true, and false)
//TODO: It should control a theme in an app