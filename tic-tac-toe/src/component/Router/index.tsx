import { PropsWithChildren } from "react";


interface RouteProps {
    path: string
}

function Route({ path, children}: PropsWithChildren<RouteProps>) {
    return window.location.pathname === path ? children : null;
}

export default Route;