// import { Children } from "react";

export default function CustomQuery({ children }) {
    children()
    return (
        <h1>Query</h1>

        // <h1>{Children.count(children)}</h1>
    );
}

//TODO: Recreate suspense as close as we can