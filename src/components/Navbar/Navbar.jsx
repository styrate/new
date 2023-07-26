import React from "react"
import Button from "../Button/Button";
import "./Navbar.css"

import { Link } from "react-router-dom"
const Navbar = () => {
    const handleClick = () => {
        let  element = document.getElementById("navUl")                        
        element.classList.toggle("show")
    }
    return (
        <div>
            <nav className="nav">
                <div >
                    <li >
                        <Link  className="navLink caption">STYRATE</Link>
                    </li>            
                </div>   
                <div className="nitems" id="navUl">
                    <div >
                        <li className="navItem">
                            <a onClick={handleClick} className="navLink nav1" href="/">Pricing</a>
                        </li>
                        <li className="navItem">
                            <a onClick={handleClick} className="navLink nav1" href="#about">Contact</a>
                        </li>
                        <li className="navItem">
                            <a onClick={handleClick}  className="navLink nav1" href="#projects">About us</a>
                        </li>            
                    </div>                                            
                    <div  >
                        <li className="navItem">
                            <span className="navLink nav1">
                                <Button
                                    name="login"
                                    bgcolor="#171717"
                                    color="#fff"
                                />
                            </span>                
                        </li>
                        <li className="navItem">
                            <span className="navLink nav1">
                                <Button 
                                    name="signup"
                                    bgcolor="#fff"
                                    color=""
                                />
                            </span>                
                        </li>                
                    </div>
                </div>
                
                <label htmlFor="icon" className="icon">
                    <i onClick={() => {
                        let  element = document.getElementById("navUl")                        
                        element.classList.toggle("show")
                    }} class="fa-solid fa-bars"></i>
                </label>
            </nav>
        </div>
    )
}

export default Navbar
