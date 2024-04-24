import { memo } from "react";

export default memo(function StatelessCounter({ id, init, count, setCount }) {
    const addHandler = function () {
        setCount(count + 1);
    };
    console.log("Rendering", id);
    return (
        <>
            <p>Hello {init}</p>
            <p>Count: {count}</p>
            <button
                onClick={addHandler}
            >
                Add
            </button>
        </>
    );
})