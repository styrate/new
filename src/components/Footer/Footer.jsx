import React from "react";
import "./Footer.css"

import facebookImg from "../../assets/images/FacebookLogo.svg"
import instaImg from "../../assets/images/InstagramLogo.svg"
import youtubeImg from "../../assets/images/YoutubeLogo.svg"
import twitterImg from "../../assets/images/TwitterLogo.svg"
const Footer = () => {
    const today = new Date().getFullYear()
    return (
        <div className="footer">
            <div className="logoFooter">
                <p className="logoText">STYRATE</p>
            </div>
            <div className="copyright">
                <p className="copyrightText">
                    ©{today} Styrate.co All rights reserved
                </p>
            </div>
            <div className="socials">
                <img src={facebookImg} alt="" />
                <img src={instaImg} alt="" />
                <img src={youtubeImg} alt="" />
                <img src={twitterImg} alt="" />
            </div>
        </div>
    )
}

export default Footer