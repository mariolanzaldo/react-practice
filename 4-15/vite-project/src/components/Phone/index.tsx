import { Component } from "react";

interface PhoneNumberProps {
    phone: string;
}

export class PhoneNumber extends Component<PhoneNumberProps> {
    constructor(props: PhoneNumberProps) {
        super(props);
    }
    render() {
        const { phone } = this.props;
        const codeArea = phone.substring(0, 3);
        const rest = phone.substring(3);


        return `(${codeArea})-${rest}`;
    }
}