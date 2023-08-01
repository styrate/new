import React from "react";
import "./Input.css"
const Input = (props) => {
    return (
        <div className="input">
            <p>
                <label className="label" htmlFor="">{props.lblname}</label>
            </p>
            <p>
                <input className="textInput" type="text" placeholder={props.placeholder}/>
            </p>
            
        </div>
    )
}

export default Input