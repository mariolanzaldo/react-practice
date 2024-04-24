import { Component } from "react";
import Counter from "./Counter";
import ErrorBoundary from "./ErrorBoundary";

export class CounterApp extends Component<unknown,unknown> {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        // const counter = <Counter id={"unique-counter"} />
        // console.log(Counter.reset);
        return (
            <>

                <ErrorBoundary id={'counter-1'} onReload={() => { Counter.reset('counter-1') }}>
                    <Counter
                        id={`counter-1`}
                    />
                </ErrorBoundary>
            </>

        );
    }
}