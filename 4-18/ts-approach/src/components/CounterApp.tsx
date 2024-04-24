import { ChangeEvent, ReactElement, useState, memo } from "react";
import Counter from "./Counter";
// import { useCounterContext } from "../state";

const PureCounter = memo(Counter);

export default function CounerApp(): ReactElement {
    const [inputValue, setInputValue] = useState<string>("");
    // const [counters, setcounters] = useCounterContext();
    

    const onInputChange = function ({ target }: ChangeEvent<HTMLInputElement>): void {
        setInputValue(target.value);
    };

    return (
        <>
            <input
                value={inputValue}
                type="text"
                onChange={onInputChange}
            />
            <PureCounter
                init={inputValue}
                index={0}
            />
            <PureCounter
                init={inputValue}
                index={1}
            />
            <PureCounter
                init={inputValue}
                index={2}
            />
            {/* {count.map((_, idx) => {
                return (
                    <Counter
                        init={inputValue}
                        count={0}
                        index={idx}
                        key={`counter-${idx}`}
                    />
                );
            })} */}
        </>
    );
}
