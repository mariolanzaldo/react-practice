import { useState, useEffect, Dispatch, SetStateAction } from "react";
// import { ContactsAppState } from "../componets/ContactsApp";

// export interface SerializableState {
//     [key: string]: unknown;
// }


export const useSerializable = function<T> (
    getKey: () => string, 
    initialState: () => T
): [T, Dispatch<SetStateAction<T>>]{

    const [state, setState] = useState<T>(initialState);

    useEffect(() => {
        setState(readFromLocalStorage(getKey, initialState));
    }, []);

    useEffect(() => {
        writeToLocalStorage(getKey(), state);
    }, [state, getKey]);

    const readFromLocalStorage = (getKey: () => string, initialState: () => T): T => {
        const data = localStorage.getItem(getKey());
        return (data && data !== "undefined") ? JSON.parse(data) : initialState();
    };

    const writeToLocalStorage = (key: string, data: T): void => {

        localStorage.setItem(key, JSON.stringify(data));
    };

    return [state, setState];

}