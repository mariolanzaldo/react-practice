import { Component } from "react";

//This should be an abstract class
export class Serializable extends Component {

    componentDidMount() {
        this.setState(this.readFromLocalStorage());
    }

    readFromLocalStorage() {
        //the key should be implemented by the subclass
        const data = localStorage.getItem(this.getKey());

        return (data && data !== "undefined") ? JSON.parse(data) : this.initialState();
    }

    writeToLocalStorage() {
        localStorage.setItem(this.getKey(), JSON.stringify(this.saveState()));
    }

    componentDidUpdate(_, prevState) {
        if (prevState !== this.state) {
            this.writeToLocalStorage();
        }
    }

    //abstract getKey(): string
    //abstract saveState()
    //abstract initialState()
}