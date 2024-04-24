import React from "react";
export interface ContactInterface {
    name: string;
    phone: string;
}
interface AppState {
    contacts: ContactInterface[];
}
export declare class App extends React.Component<{}, AppState> {
    constructor(props: {});
    render(): React.DetailedReactHTMLElement<{
        className: string;
    }, HTMLElement>;
}
export {};
