import React, { useState } from "react";
import Input from "../components/Input/Input";
import Navbar from "../components/Navbar/Navbar";
import Heading2 from "../components/Heading2/Heading2";
import Button from "../components/Button/Button";
import "./Login.css";
import { Link, Navigate } from "react-router-dom";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
  
    // Create a URL-encoded string
    const encodedData = `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
  
    // Make a POST request to your FastAPI login endpoint
    console.log(encodedData)
    try {
      const response = await fetch("http://localhost:8000/api/v1/users/auth/jwt/login", { // Adjust the URL to your login endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodedData,
      });
  
      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Login failed");
      }
  
      // Extract the token from the response
      const data = await response.json();
      const authenticatedToken = data.access_token; // Adjust this based on your FastAPI response structure
  
      // Store the token in localStorage (or sessionStorage)
      localStorage.setItem("token", authenticatedToken);
  
      // Update the token state
      setToken(authenticatedToken);
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle the error appropriately, e.g., show an error message to the user
    }
  };
  

  return (
    <>
      <Navbar />
      <div className="login">
        <Heading2 text="Login" />
        <form onSubmit={handleLogin}>
          <Input
            lblname="Email"
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            lblname="Password"
            placeholder="Your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button bgcolor="#fff" color="#171717" name="Login" type="submit" />
        </form>
        
      </div>
    </>
  );
};

export default Login;
