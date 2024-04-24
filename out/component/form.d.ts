import React from "react";
import { ContactInterface } from "../app";
interface Props {
    contacts: ContactInterface[];
    onAddContact: (contact: {
        name: string;
        phone: string;
    }) => void;
}
interface State {
    name: string;
    phone: string;
}
export declare class Form extends React.Component<Props, State> {
    constructor(props: Props);
    onSubmit(event: React.FormEvent<HTMLFormElement>): void;
    render(): React.DetailedReactHTMLElement<{
        className: string;
    }, HTMLElement>;
}
export {};
