import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Heading2 from "../components/Heading2/Heading2";
import { Link } from "react-router-dom";
import "./Signup.css"
const Signup = () => {
    return (
        <>
        <Navbar />
        <div className="signup">
            <Heading2 
            text="Create Account"
            />
            <Input
            lblname="Email"
            placeholder="Your email"
            />
            <Input
            lblname="Username"
            placeholder="Your username"
            />
            
            <Input
            lblname="Password"
            placeholder="Your password"
            />
            <Link to="/huh">
            <Button 
                bgcolor="#fff"
                color="#171717"
                name="register"
            />
            </Link>
        </div>
        </>
    )
}

export default Signup