import { useCallback, useState } from "react";
import Counter from "./Counter";
import StatelessCounter from "./StatelessCounter";
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

    const [inputValue, setInputValue] = useState("");

    function onInputChange({ target }) {
        setInputValue(target.value);
    }

    // function createSetCount(id) {
    //     return () => {
    //         const newCounts = [...count];
    //         newCounts[id]++;
    //         // setCount(newCounts);
    //     };
    // }

    // const [dummy] = useState(() => () => console.log(inputValue));

    const dummy = useCallback(() => console.log("a"), []);

    return (
        <>
            <input
                value={inputValue}
                type="text"
                onChange={onInputChange}
            />
            <Counter
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
            />
        </>
    );
}
