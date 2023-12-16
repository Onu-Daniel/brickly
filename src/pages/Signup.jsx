import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/Signup.css";
import mansionImage from "../public/mansion2.jpg";

const Signup = () => {
  return (
    <div>
      <Header />
      <div className="splits-container">
        <div className="split-items1" style={{ flex: "50%" }}>
        </div>
        <div className="split-items2" style={{ flex: "50%" }}>
          <h1>Create an account</h1>
          <div className="signup-buttons-container">
            <Link to={`/signup/company`}>
              <button className="signup-buttons">As a Company</button>
            </Link>
            <Link to={`/signup/individual`}>
              <button className="signup-buttons">As an Individual</button>
            </Link>
          </div>
          <p className="signup-text">
            Already registered? <Link to={`/login`}>Sign in</Link>{" "}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
