import React from "react";
import "./Heading2.css"
const Heading2 = (props) => {
    return (
        <h2 className="headingSecondary">
            {props.text}
        </h2>
    )
}

export default Heading2