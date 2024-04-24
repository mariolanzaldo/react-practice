import ReactDOM from "react-dom/client.js";
import React from "react";
import { App } from "./app.js";
// import { Form } from "./component/form.js";
const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);
// const testCounter = new Counter();
// reactRoot.render(React.createElement(Counter));
reactRoot.render(React.createElement(App));
//TODO: Recreate de contact list and add typescript to this
