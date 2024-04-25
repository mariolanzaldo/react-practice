import { memo } from "react";
import customClsx from "../utility/customClasses";

interface StatelessCounterProps {
    id: number;
    init: string;
    count: number;
    setIncrement: () => void;
    setDecrement: () => void;
    setReset: () => void;
}

export default memo(function StatelessCounter({ id, init, count, 
    setIncrement, 
    setDecrement,
    setReset, 
}: StatelessCounterProps) {

    const addHandler = function () {
        setIncrement();
    };

    const decrementHandler = function () {
        setDecrement();
    }

    const resetHandler = function() {
        setReset();
    }

    const getValue = (): number => {
        if (typeof count !== 'number') {
            throw new Error("Counter value is not a number");
        }
    
        if (count < 0) {
            throw new Error("Counter cannot be negative");
        }
    
        return count || 0;
    };

    id
    return (
        <>
<           div className={customClsx("container", "mt-5")}>
                <div className={customClsx("row", "justify-content-center")}>
                    <div className={customClsx("col-sm-6")}>
                        <div className={customClsx("card")}>
                            <div
                                className={customClsx("card-body", "text-center")}>

                                    <p
                                    className={customClsx("mb-4", "display-4")}
                                    >
                                        Hello {init}
                                    </p>
                                    <p
                                    className={customClsx("mb-4", "display-4")}

                                    >
                                        Count: {getValue()}
                                        </p>
                                <div
                                    className={customClsx("btn-group")}>
                                    <button
                                        className={customClsx("btn", "btn-primary")} onClick={addHandler}>
                                        Increment
                                    </button>
                                    <button
                                        className={customClsx("btn", "btn-danger")} onClick={decrementHandler}>
                                        Decrement
                                    </button>

                                    <button
                                        className={customClsx("btn", "btn-warning")}
                                        onClick={resetHandler}
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
})