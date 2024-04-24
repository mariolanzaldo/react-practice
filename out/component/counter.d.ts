import React from "react";
interface CounterState {
    count: number;
}
export declare class Counter extends React.Component<{}, CounterState> {
    constructor(props: {});
    increment(): void;
    decrement(): void;
    render(): React.DetailedReactHTMLElement<{
        className: string;
    }, HTMLElement>;
}
export {};
