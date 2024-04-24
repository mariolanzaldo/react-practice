import { Component } from "react";

export class PhoneNumber extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { phone } = this.props;
        const codeArea = phone.substring(0, 3);
        const rest = phone.substring(3);


        return `(${codeArea})-${rest}`;
    }
}