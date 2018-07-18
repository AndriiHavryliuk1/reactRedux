import React from "react";
import { connect } from "react-redux";

class Main extends React.Component {
    constructor(props) {
        super();
        this.state = {
            user: {
                name: props.user.name
            }
        }
    }

    onUserNameChangeHandler(event) {
        this.setState({
            user: Object.assign({}, this.state.user, {
                name: event.target.value
            })
        })
        this.props.setName(event.target.value);
    }

    render() {
        const style = {
            "marginTop": "10px",
            "marginBottom": "10px"
        }
        return (
            <div>
                <div className="row">
                    <div className="col-xs-10">   
                        <h1>The Main Component!</h1>
                    </div>
                </div>
                <div className="row" style={style}>
                    <div className="col-xs-10">   
                        <input type="text" value={this.state.user.name} onChange={this.onUserNameChangeHandler.bind(this)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10">   
                        <button className="btn btn-primary" onClick={() => {this.props.setName(this.state.user.name)}}>
                            Change the username
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: "SET_NAME",
                payload: name
            });
        }
    };
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Main);