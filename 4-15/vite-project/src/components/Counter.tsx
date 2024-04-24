// import React from "react";
import customClsx from "../utility/customClasses";
import { Serializable, SerializableState } from "./Serializable";

class Counter extends Serializable {
    constructor(props: SerializableState) {
        super(props);
        // this.state = { count: 0 };
        this.state = this.initialState();
    }

    static reset(id: string): void {
        localStorage.removeItem(id);
    }

    handleIncrement = (): void => {
        this.setState({ count: this.state.count + 1 });
    }

    getValue() {
        if (this.state.count < 0) {
            throw new Error("Counter cannot be negative");
        }

        return this.state.count;
    }

    handleDecrement = () => {
        // if (this.state.count === 0) {
        //     throw new Error("Counter cannot be negative");
        // }
        this.setState({ count: this.state.count - 1 });
    }

    getKey() {
        return this.props.id;
    }

    saveState() {
        return this.state;
    }

    initialState(): {count: number} {
        return { count: 0 };
    }

    render() {
        return (
            <div className={customClsx("container", "mt-5")}>
                <div className={customClsx("row", "justify-content-center")}>
                    <div className={customClsx("col-m-6")}>
                        <div className={customClsx("card")}>
                            <div className={customClsx("card-body", "text-center")}>
                                <h3 className={customClsx("mb-4")}>Counter</h3>
                                <p className={customClsx("display-4")}>{this.getValue()}</p>
                                <div className={customClsx("btn-group")}>
                                    <button className={customClsx("btn", "btn-primary")} onClick={this.handleIncrement}>
                                        Increment
                                    </button>
                                    <button className={customClsx("btn", "btn-danger")} onClick={this.handleDecrement}>
                                        Decrement
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter;
