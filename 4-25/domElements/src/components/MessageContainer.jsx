import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import styles from "./styles.module.css";

function MessageContainer() {
    const [messageVisibility, setMessageVisibility] = useState(false);

    const messageRef = useRef(null);

    function handleHeaderClick() {
        messageRef.current?.classList.toggle(styles.selected);
        console.log("Header clicked", messageRef);
    }

    function handleCheck() {
        setMessageVisibility(!messageVisibility);
    }


    useEffect(() => {
        messageRef.current = document.getElementById("message");

    }, []);

    return (
        <>
            <fieldset>
                <legend
                    onClick={handleHeaderClick}
                >
                    Message visibility
                </legend>
                <div>
                    <input
                        onChange={handleCheck}
                        checked={messageVisibility}
                        type="checkbox"
                        id="coding"
                        name="interest"
                        value="coding"
                    />
                    <label htmlFor="coding">Coding</label>
                </div>
            </fieldset>
            {messageVisibility ? null : <Message ref={messageRef} />}
        </>
    );
}

export default MessageContainer;