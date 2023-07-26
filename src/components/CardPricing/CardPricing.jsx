import React from "react";
import "./CardPricing.css"
import checkIcon from "../../assets/images/Check icon.svg"
import Button from "../Button/Button";
const CardPricing = (props) => {
    return (
        <div className="cardPricing">
            <div className="tier">
                {props.tier}
            </div>
           {
                props.tier == "Premium Tier" && <div className="invertedTierMsg">
                    Most Popular
                </div>
           }
            <div className="pricing tier">
                {props.pricing}
            </div>
            <div className="cardTierMessage">
                {props.tierMessage}
            </div>
            <div className="cardTierOfferings">
                {props.arrText.map((text) => (
                    <div key={text} style={{textAlign: "left"}} className="offeringDiv">
                        <img src={checkIcon} alt="" />
                        <span className="offeringText">{text}</span>
                    </div>
                ))}
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

export default CardPricing