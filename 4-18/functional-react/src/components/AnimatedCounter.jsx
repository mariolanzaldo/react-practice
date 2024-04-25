import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

function AnimatedCounter({ value }) {
    const [displayValue, setDisplayValue] = useState(value);
    const [isAnimating, setIsAnimating] = useState(false);
    const counterDisplayRef = useRef(null);
    const setTimeoutRef = useRef(0);



    useEffect(() => {

        if (displayValue !== value) {
            // setTimeoutRef.current = setTimeout()
            clearTimeout(setTimeoutRef.current);
            setIsAnimating(true);
            setTimeoutRef.current = setTimeout(() => {
                //This allows to delay the animation
                setDisplayValue(value);
                setIsAnimating(false);
            }, 1000);
        }


        return () => clearTimeout(setTimeoutRef.current);
    }, [value, displayValue]);

    // const [value, setValue] = useState();
    // const id = useRef(0);

    // const buttonRef = useRef(null);

    // const handleClick = function () {
    //     id.current++;
    //     console.log("Button ref", buttonRef.current);
    //     console.log("ID", id.current);
    // }


    return (
        <>
            <div
                ref={counterDisplayRef}
                // className={styles.animatedDisplay}
                className={`${styles.animatedDisplay} ${isAnimating ? styles.slidein : ""}`}
            >
                {displayValue}
            </div>
            {/* <div>{id.current}</div> */}
            {/* <button
                ref={buttonRef}
                onClick={handleClick}
            >
                Button
            </button> */}
        </>
    )
}

export default AnimatedCounter;

//TODO: Improve the animation
//TODO: If the button is clicked several times it should be able to see all the intermediate values/animations