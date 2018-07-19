import React from "react";

export const User = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-10">   
                    <h1>The User Component!</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-10">   
                    <p>Username: {props.username}</p>
                </div>
            </div>
        </div>
    )
}