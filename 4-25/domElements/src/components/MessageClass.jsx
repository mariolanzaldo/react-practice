/* eslint-disable react/prop-types */
//This could be a nice way to do it
import React from "react";
import { Component } from "react";
import styles from "./styles.module.css";

class MessageClass extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { forwardedRef } = this.props;
        console.log("rendering");
        return (
            <h1 id="message" ref={forwardedRef} className={styles.message}>
                Message
            </h1>
        );
    }
}
//
export default React.forwardRef((props, ref) => {
    return <MessageClass {...props} forwardedRef={ref} />;
});