import { KeyboardEvent } from "react";
import styles from "./style.module.css";
// import delay from "../utils/delayFn";

// type SwitchProps = {
//     onChange: (event: ChangeEvent<HTMLInputElement>) => void;
//     toggled: boolean;
// }

// function Switch({ onChange, toggled }: SwitchProps) {

//     const [isOn, setIsOn] = useState(false);

//     console.log(toggled);
//     console.log(onChange);

//     const switchRef = useRef<HTMLButtonElement>(null);
//     const trackRef = useRef<HTMLDivElement>(null);
//     const handleRef = useRef<HTMLDivElement>(null);
//     const inputRef = useRef<HTMLInputElement>(null);
//     const handleClick = async function () {

//         if(!isOn) {
//             handleRef.current?.classList.toggle(styles.innerFocus);
//             await delay(200);
//             trackRef.current?.classList.toggle(styles.translateHover);
//             switchRef.current?.classList.toggle(styles.handleActiveFirst);
//             handleRef.current?.classList.toggle(styles.activeMark);

//         } else {
//             console.log("ON!");

//         }

//         setIsOn(!isOn);



//     }

//     return (
//         <button 
//             className={styles.switch}
//             ref={switchRef}
//             onClick={handleClick}
//         >
//         <div 
//             ref={trackRef}
//             className={styles.track}
//         >
//             <div 
//                 ref={handleRef}
//                 className={styles.handle}
//              >
//                 <div 
//                     // ref={}
//                     className={styles.icons}
//                 >
//                 </div>
//           </div>
//         </div>
//         <input
//             ref={inputRef} 
//             type="checkbox" 
//             aria-hidden="true" 
//             className={styles.checkbox}
//             onChange={onChange}
//         />
//       </button>
//     );
// }

// function Switch({ onChange }: SwitchProps) {

//     return (
//         <label
//         className={styles.div}
//         >
//             <input 
//             className={styles.input}
//             type="checkbox"
//             onChange={onChange} 
//             />
//             <span
//             className={styles.span}
//             ></span>

//         </label>
//     )
// }
// import "./ToggleSwitch.scss";

/*
Toggle Switch Component
Note: id, checked and onChange are required for ToggleSwitch component to function. The props name, small, disabled
and optionLabels are optional.
Usage: <ToggleSwitch id="id" checked={value} onChange={checked => setValue(checked)}} />
*/

type SwitchProps = {
    id: string;
  name?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  optionLabels?: [string, string];
  small?: boolean;
  disabled?: boolean;
}

const Switch = ({
  id,
  name,
  checked,
  onChange,
  optionLabels = ["Yes", "No"],
  small,
  disabled
}: SwitchProps) => {
  function handleKeyPress(e: KeyboardEvent<HTMLLabelElement>) {
    if (e.keyCode !== 32) return;

    e.preventDefault();
    onChange(!checked);
  }

  return (
    <div className={`${styles["toggle-switch"]} ${small ? styles["small-switch"] : ""}`}>
      <input
        type="checkbox"
        name={name}
        className={styles["toggle-switch-checkbox"]}
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      {id ? (
        <label
        className={styles["toggle-switch-label"]}

          tabIndex={disabled ? -1 : 1}
          onKeyDown={(e) => handleKeyPress(e)}
          htmlFor={id}
        >
          <span
           className={
            disabled
              ? `${styles["toggle-switch-inner"]} ${styles["toggle-switch-disabled"]}`
              : styles["toggle-switch-inner"]
          }
            data-yes={optionLabels![0]}
            // data-yes={"YES"}
            data-no={optionLabels![1]}
            tabIndex={-1}
          />
          <span
            className={
                disabled
                  ? `${styles["toggle-switch-switch"]} ${styles["toggle-switch-disabled"]}`
                  : styles["toggle-switch-switch"]
              }
            tabIndex={-1}
          />
        </label>
      ) : null}
    </div>
  );
};

// Set optionLabels for rendering.
// ToggleSwitch.defaultProps = {
//   optionLabels: ["Yes", "No"]
// };

// ToggleSwitch.propTypes = {
//   id: PropTypes.string.isRequired,
//   checked: PropTypes.bool.isRequired,
//   onChange: PropTypes.func.isRequired,
//   name: PropTypes.string,
//   optionLabels: PropTypes.array,
//   small: PropTypes.bool,
//   disabled: PropTypes.bool
// };


export default Switch;

//TODO: Finish this component exactly as materialUI spec
//TODO: When it clicks it should be switch between two values(default true, and false)
//TODO: It should control a theme in an app