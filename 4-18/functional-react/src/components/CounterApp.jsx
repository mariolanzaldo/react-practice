import { useRef, useState } from "react";
// import Counter from "./Counter";
// import StatelessCounter from "./StatelessCounter";
import AnimatedCounter from "./AnimatedCounter";
import styles from "./styles.module.css";
// import { useCounterContext } from "../state";


// export default class CounterApp extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             inputValue: "",
//         }

//         this.handleOnChangeInput = this.handleOnChangeInput.bind(this);
//     }

//     handleOnChangeInput({ target }) {
//         this.setState({ inputValue: target.value })
//     }

//     render() {
//         const { inputValue } = this.state;
//         return (
//             <>
//                 <input onChange={this.handleOnChangeInput} type="text" value={inputValue} />
//                 <Counter init={inputValue} />
//                 <Counter init={inputValue} />
//             </>
//         )
//     }
// }

export default function CounterApp() {
    // const [count] = useCounterContext();
    // console.log(counts);

    // const [inputValue, setInputValue] = useState("");
    const [isValidField, setIsValidField] = useState(false);
    const [count, setCount] = useState(0);
    const inputValue = useRef("");
    const inputRef = useRef(null);
    const errorMsgRef = useRef(null);

    const onInputChange = function ({ target }) {
        // setInputValue(target.value);
        inputValue.current = target.value;
        const isValid = validation(target.value);
        if (isValid !== isValidField) {
            setIsValidField(isValid);
            if (isValid) {
                inputRef.current.classList.add(styles.valid);
                errorMsgRef.current.classList.add(styles.hide);
            } else {
                inputRef.current.classList.remove(styles.valid);
                errorMsgRef.current.classList.remove(styles.hide);

            }
        }
    }

    const validation = function (value) {
        return value.length > 0 && value.length < 10;
    }

    const handleClick = function () {
        setCount(count + 1);
    }

    // function createSetCount(id) {
    //     return () => {
    //         const newCounts = [...count];
    //         newCounts[id]++;
    //         // setCount(newCounts);
    //     };
    // }

    // const [dummy] = useState(() => () => console.log(inputValue));

    // const dummy = useCallback(() => console.log("a"), []);
    console.log("Rendering");

    return (
        <div
            className={styles.appCounter}
        >
            <input
                ref={inputRef}
                // className={isValidField ? styles.valid : styles.invalid}
                className={styles.input}
                // value={inputValue}
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

            {/* <Counter
                init={inputValue}
                index={0}
            />
            <Counter
                init={inputValue}
                index={1}
            />
            <Counter
                init={inputValue}
                index={2}
            />

            <StatelessCounter
                init={"inputValue"}
                count={0}
                setCount={dummy}
                id={"static"}
            /> */}
        </div>
    );
}
