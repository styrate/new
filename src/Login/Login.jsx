import React from "react";
import Input from "../components/Input/Input";
import Navbar from "../components/Navbar/Navbar";
import Heading2 from "../components/Heading2/Heading2";
import Button from "../components/Button/Button";
import "./Login.css"
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <>
        <Navbar />
        <div className="login">
            
            <Heading2 
            text="Login"
            />
            <Input
            lblname="Email"
            placeholder="Your email"
            />
            <Input
            lblname="Password"
            placeholder="Your password"
            />
            <Link to="/huh">
            <Button 
                bgcolor="#fff"
                color="#171717"
                name="Login"
            />
            </Link>
            
        </div>
        </>
        
    )
}

export default Login