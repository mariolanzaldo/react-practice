import { forwardRef, useState } from "react";
import styles from "./styles.module.css";
/* eslint-disable react/prop-types */

export default forwardRef(
    function Message(_, ref) {
        const [count, setCount] = useState(0);

        const handleClick = function () {
            setCount(count + 1);
        };

        console.log('rendering');
        return (
            <h1
                id="message"
                ref={ref}
                //The following line has potentioal issues for rendering: when rendering form server side, the inconsistency comes from the client and server could use different mechanism to render.
                //Possible solutions: - use a library to handle classes or use classes as part of the state
                className={styles.message}
                onClick={handleClick}
                //data-count is interpreted as a custom attribute for the DOM element
                data-count={count}
            >
                Message Count: {count}
            </h1>
        )
    }
);



// export default Message;