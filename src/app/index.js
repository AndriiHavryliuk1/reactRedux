import React from "react";
import {render} from "react-dom";

import { User } from "./components/User";
import { Main } from "./components/Main";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "Sonik"
        }
    }

    changeUsername(newName) {
        this.setState({
            username: newName
        })
    }

    render() {
        return (
            <div className="container">
                <h1>It works!!!</h1>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));