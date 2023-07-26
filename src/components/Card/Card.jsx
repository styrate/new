import React from "react";

import Button from "../Button/Button";
import "./Card.css"
const Card = (props) => {
    return (
        <div className="card">
            <div className="image" style={{backgroundColor: props.bgcolorImg}}>
                <img src={props.img} alt="" />
            </div>
            <div className="cardHeading">
                {props.heading}
            </div>
            <div className="cardBody">
                {props.bodyText}
            </div>
            <div className="cardButton">
                <Button 
                bgcolor={props.bgcolor}
                color={props.color}
                name={props.name}
                />
            </div>
        </div>
    )
}

export default Card