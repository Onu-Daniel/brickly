import React from "react";

import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faComments } from "@fortawesome/free-solid-svg-icons";

const DashboardHeader = () => {
  return (
    <div className="dashboard-header-container">
      <div className="dashboard-header">
        <Link to={`/`}>
          <h3>Brickly</h3>
        </Link>

        <div className="right-buttons">
          <FontAwesomeIcon icon={faComments} className="icon"/>
          <FontAwesomeIcon icon={faBell} className="icon"/>
          <Link to={`/signup`}>
            <button className="signup"></button>
          </Link>
          <p>user</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
