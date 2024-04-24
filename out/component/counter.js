import { DisplayCounter } from "./displayCounter.js";
import React from "react";
console.log("now is working");
const { createElement } = React;
export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        // the bound is done here because the render will ne executed several times
        // and here only once
    }
    //   get count() {
    //     return this.#count;
    //   } // not used anymore since we are using state now
    increment() {
        this.setState({ count: this.state.count + 1 });
        console.log(this.state.count);
    }
    decrement() {
        this.setState({ count: this.state.count - 1 });
    }
    render() {
        return createElement("div", { className: "container" }, 
        // createElement("h1", {}, "Count: " + this.state.count),
        createElement(DisplayCounter, {
            num: this.state.count,
            className: "counter",
        }), createElement("button", { onClick: this.decrement }, "-1"), createElement("button", { onClick: this.increment }, "+1")
        //   createElement("p", {}, this.count)
        );
    }
}
