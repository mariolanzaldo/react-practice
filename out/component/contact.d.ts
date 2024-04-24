import React, { ReactElement } from "react";
interface ContactProps {
    contact: {
        name: string;
        phone: string;
    };
    key: string;
}
export declare class Contact extends React.Component<ContactProps> {
    constructor(props: ContactProps);
    render(): ReactElement;
}
export {};
