import { ChangeEvent, ReactElement, useRef, useState } from "react";
import AnimatedCounter from "./AnimatedCounter";
import styles from "./styles.module.css";

export default function CounterApp(): ReactElement {
    const [isValidField, setIsValidField] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);
    const inputValue = useRef<string>("");
    const inputRef = useRef<HTMLInputElement>(null);
    const errorMsgRef = useRef<HTMLDivElement>(null);

    const onInputChange = function (event: ChangeEvent<HTMLInputElement>): void {
        const { target } = event;


        inputValue.current = target.value;
        const isValid: boolean = validation(target.value);
        if (isValid !== isValidField) {
            setIsValidField(isValid);
            if (isValid) {
                inputRef.current?.classList.add(styles.valid);
                errorMsgRef.current?.classList.add(styles.hide);
            } else {
                inputRef.current?.classList.remove(styles.valid);
                errorMsgRef.current?.classList.remove(styles.hide);

            }
        }
    }

    const validation = function (value: string): boolean {
        return value.length > 0 && value.length < 10;
    }

    const handleClick = function () {
        setCount(count + 1);
    }

    console.log("Rendering");

    return (
        <div
            className={styles.appCounter}
        >
            <input
                ref={inputRef}
                className={styles.input}
                type="text"
                onChange={onInputChange}
            />

            <div
                ref={errorMsgRef}
                className={styles.msg}
            >
                INVALID INPUT
            </div>

            <AnimatedCounter value={count} />

            <button
                onClick={handleClick}
            >
                Increment
            </button>
        </div>
    );
}
