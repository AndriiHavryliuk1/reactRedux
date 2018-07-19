import React from "react";
import { connect } from "react-redux";

import { User } from "../components/User";
import Main from "./Main";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <Main/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10">
                        <User username={this.props.user.name}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math
    };
};

export default connect(mapStateToProps)(App);