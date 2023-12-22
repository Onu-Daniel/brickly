import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/Signup.css";

const SignupCompany = () => {
  return (
    <div>
      <Header />
      <div className="signup-body" style={{textAlign: "left"}}>
        <div className="box">
          <h1 className="topic">Create Account</h1>
          <form action="">
            <div className="form-inside">
              <label htmlFor="address">Wallet Address:</label>
              <input
                type=""
                className="input-field"
                id="address"
                placeholder="Input Wallet Address"
              />
              <button className="connect-wallet">Connect Wallet</button>
            </div>

            <div className="form-inside">
              <label htmlFor="companyname">Name of Company:</label>
              <input
                type=""
                className="input-field"
                id="companyname"
                placeholder="Enter your company name"
              />
            </div>

            <div className="form-inside">
              <label htmlFor="companyid">Company ID:</label>
              <input
                type=""
                className="input-field"
                id="companyname"
                placeholder="Enter your company RC number"
              />
            </div>
            
            <div className="form-inside">
              <label htmlFor="address">Company Address:</label>
              <input
                type=""
                className="input-field"
                id="address"
                placeholder="Enter your company address"
              />
            </div>

            <div className="form-inside">
              <label htmlFor="email">Email Addresss:</label>
              <input
                type=""
                className="input-field"
                id="email"
                placeholder="Enter your company email"
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

export default SignupCompany;
