import { Component } from "react";
import { ContactsAppState } from "./Contacts.app";

//This should be an abstract class

export interface SerializableState {
    [key: string]: unknown;
    // count?: number;
    // id: string
}
export abstract class Serializable extends Component<SerializableState, {count: number} | ContactsAppState> {
    abstract getKey(): unknown;
    abstract saveState(): unknown;
    abstract initialState(): {count: number} | ContactsAppState; 
    componentDidMount() {
        this.setState(this.readFromLocalStorage());
    }

    readFromLocalStorage() {
        //the key should be implemented by the subclass
        const data = localStorage.getItem(String(this.getKey()));

        return (data && data !== "undefined") ? JSON.parse(data) : this.initialState();
    }

    writeToLocalStorage() {
        localStorage.setItem(String(this.getKey()), JSON.stringify(this.saveState()));
    }

    componentDidUpdate(_: SerializableState, prevState: SerializableState) {
        if (prevState !== this.state) {
            this.writeToLocalStorage();
        }
    }
}