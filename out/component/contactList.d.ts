import { ContactInterface } from "../app";
import { Component, ReactElement } from 'react';
interface Props {
    contacts: ContactInterface[];
}
export declare class ContactList extends Component<Props> {
    constructor(props: Props);
    render(): ReactElement;
}
export {};
