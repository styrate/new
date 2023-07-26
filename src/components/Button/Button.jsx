import React from "react";
import "./Button.css"
const Button = (props) => {
    return (
        <>
        <div className="button">
            <button className="btn" style={{backgroundColor: props.bgcolor, color: props.color}}>
                {props.name}
            </button>
        </div>
        </>
    )
}

export default Button