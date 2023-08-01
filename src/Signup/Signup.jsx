import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Heading2 from "../components/Heading2/Heading2";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Signup.css"
const Signup = () => {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleRegister = async (e) => {
        e.preventDefault()
        const payload = {
            email: email,
            password: password,
            username: username
        }  
        try {
            const response = await fetch("http://localhost:8000/api/v1/users/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            })
            if (!response.ok) {
                throw new Error("Sign up failed")
            }
            const data = await response.json()
            
        }
        catch (error) {
            console.error("An error occurred:", error)
        }
    }
    return (
        <>
        <Navbar />
        <div className="signup">
            <Heading2 
            text="Create Account"
            />
            <form onSubmit={handleRegister}>
                <Input
                lblname="Email"
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                lblname="Username"
                placeholder="Your username"
                onChange={(e) => setUsername(e.target.value)}
                />
                
                <Input
                lblname="Password"
                placeholder="Your password"
                onChange={(e) => setPassword(e.target.value)}
                />
                
                <Button 
                    bgcolor="#fff"
                    color="#171717"
                    name="register"
                />
            </form>
            
        </div>
        </>
    )
}

export default Signup