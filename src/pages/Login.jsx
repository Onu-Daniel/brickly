import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Login.css";


const Login = () => {
  const [walletAddress, setWalletAddress] = useState("");

  // connecting wallet
  async function getAccount(e) {
    e.preventDefault();
    console.log("requesting account");

    if (window.ethereum) {
      console.log("detected");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        window.location.href = '/dashboard';
      } catch (error) {
        console.log("error connecting...");
      }
    } else {
      console.log("No metamask");
    }
  }

  return (
    <div className="page-container">
      <Header />
      <div className="signup-body">
        <div className="rectangle">
          <h1 className="topic">Welcome! Glad to see you</h1>
          <button type="submit" className="login-button" onClick={getAccount}>
            Connect Wallet
          </button>
          <p className="login-text">
            Don't have an account? <Link to={`/signup`}>Create one</Link>{" "}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;