import React from "react";
import "./Hero.css";
import focusImgL from "../../assets/images/Focus_3.png";
import focusImgR from "../../assets/images/Focus_4.png";
import Button from "../Button/Button";

const Hero = () => {
  const containerStyle1 = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    backgroundImage: `url(${focusImgL})`,
  };
  const containerStyle2 = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    backgroundImage: `url(${focusImgR})`,
  };

  return (
    <div className="hero">
      <div className="heroImages">
        <div className="left" style={containerStyle1}></div>
        <div className="right" style={containerStyle2}></div>
        <div className="imageOverlay">
          <h1>
            <span>Make Your Opinions Heard.</span>
            <span>Be Discovered!</span>
          </h1>
          <p>
            <span>
            Join the revolution in product discovery. Participate in exciting
            </span>
            <span>
            showdowns. Have fun while sharing your opinions.
            </span>
          </p>
          <div className="heroCta">
          <Button 
          name="Create a Showdown"
          bgcolor="#fff"
        color="#171717"
          />
          <Button 
          name="Join a Contest"
          bgcolor="#171717"
        color="#fff"
          />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
