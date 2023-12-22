import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/Signup.css";
import mansionImage from "../public/mansion2.jpg";

const Signup = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="signup-body">
        <div className="big-font">
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
