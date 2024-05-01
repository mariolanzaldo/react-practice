import { Dispatch, FC, SetStateAction, useRef, useState } from "react";
import * as styles from "./styles.module.css";
// import { customClsx } from "../../util/clsx";
// import delay from "../../util/delay";

type SwitchProps<T> = {
  id?: string;
  value1?: T;
  value2?: T;
  setValue: Dispatch<SetStateAction<T>>;
  sx: { [attribute: string]: string | number };
};

export const Switch: FC<SwitchProps<unknown>> = ({
  id,
  value1 = false,
  value2 = true,
  setValue,
//   sx,
}) => {
  const [isOn, setIsOn] = useState(false);
  const switchRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  async function handleChange() {
    if (!isOn) {
      setIsOn(!isOn);
      setValue(value2);

      innerRef.current?.classList.toggle(styles.innerFocus); // animation
      await delay(200);
      innerRef.current?.classList.toggle(styles.innerFocus); // animation
      innerRef.current?.classList.toggle(styles.innerActiveFirst); // animation
      switchRef.current?.classList.toggle(styles.baseActive);
      innerRef.current!.innerText = "✓";
      await delay(150);
      innerRef.current?.classList.toggle(styles.innerActiveFirst); // animation
      innerRef.current?.classList.toggle(styles.innerActiveSecond); // animation
    } else {
      setIsOn(!isOn);
      setValue(value1);

      innerRef.current?.classList.toggle(styles.innerInactive);
      await delay(250);
      innerRef.current?.classList.toggle(styles.innerInactive);
      innerRef.current?.classList.toggle(styles.innerInactiveFirst);
      switchRef.current?.classList.toggle(styles.baseInactive);
      innerRef.current!.innerText = "";
      await delay(250);
      innerRef.current!.className = styles.inner;
      switchRef.current!.className = styles.base;
    }

    // switchRef.current?.classList.toggle(styles.active);
    // console.log(switchRef.current?.innerText);
    // switchRef!.current!.innerText = switchRef.current!.innerText.toUpperCase();
    // innerRef.current?.classList.toggle(styles.innerActive); // animation
  }

  // function handleFocus() {
  //   console.log("focus");
  //   innerRef.current?.classList.toggle(styles.innerFocus);
  // }

  return (
    <>
      <div
        style={{ cursor: "pointer" }}
        onClick={handleChange}
        ref={switchRef}
        className={customClsx(`${styles.base}`)}
      >
        <div ref={innerRef} className={customClsx(`${styles.inner}`)}></div>
      </div>
      <input
        id={id}
        type="checkbox"
        // ref={switchRef}
        style={{ display: "none" }}
      />
    </>
  );
};