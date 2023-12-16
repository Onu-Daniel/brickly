import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";
import availableImage from "../public/mansion2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faComments } from "@fortawesome/free-solid-svg-icons";

const DashboardBody = () => {
  return (
    <div className="dashboardbody">
      <div className="splits-containerd">
        <div className="split-itemsd1" style={{ flex: "20%" }}>
          <p>Portfolio</p>
          <p>Profile</p>
          <p>Available Houses</p>
          <p>Available Listings</p>
          <p>Rent</p>
          <p>Forum</p>
        </div>
        <div className="split-itemsd2" style={{ flex: "80%" }}></div>
      </div>
    </div>
  );
};

export default DashboardBody;
