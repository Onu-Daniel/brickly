import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/SignupIndividual.css";

const SignupIndividual = () => {
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
        window.location.href = "/dashboard";
      } catch (error) {
        console.log("error connecting...");
      }
    } else {
      console.log("No metamask");
    }
  }

  return (
    <div>
      <Header />
      <div className="signup-body">
        <div className="box">
          <h1 className="topic">Create Account</h1>
          <form action="">
            <div className="form-inside">
              <label htmlFor="address">Wallet Address:</label>
              <input
                type=""
                className="input-field"
                id="address"
                placeholder="Input Address"
              />
              <button className="connect-wallet">Connect Wallet</button>
            </div>

            <div className="form-inside">
              <label htmlFor="name">Name:</label>
              <input
                type=""
                className="input-field"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            <button type="submit" className="register-button">
              Register
            </button>
            <p className="login-text">
              Have an account? <Link to={`/login`}>Login</Link>{" "}
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignupIndividual;
