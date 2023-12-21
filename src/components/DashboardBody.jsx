import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";
import Card from "./Card";

const DashboardBody = () => {
  return (
    <div className="dashboardbody">
      <div className="splits-containerd">
        <div className="split-itemsd1" style={{ flex: "20%" }}>
          
          <Link to={`/dashboard`}><p className="white-link">Portfolio</p></Link>{" "}
          <Link to={`/profile`}><p className="white-link">Profile</p></Link>{" "}
          <Link to={`/sell`}><p className="white-link">Sell</p></Link>{" "}
          <Link to={`/sell`}><p className="white-link">Available Properties</p></Link>{" "}
          <Link to={`/sell`}><p className="white-link">Available Listings</p></Link>{" "}
          <Link to={`/sell`}><p className="white-link">Rent</p></Link>{" "}
          <Link to={`/sell`}><p className="white-link">Forum</p></Link>{" "}
        </div>
        <div className="split-itemsd2" style={{ flex: "80%", display: 'flex', flexDirection: 'row' }}>
          <Card className="card-on-dashboard"/>
          <Card className="card-on-dashboard"/>
          <Card className="card-on-dashboard"/>
          <Card className="card-on-dashboard"/>
          <Card className="card-on-dashboard"/>
          <Link to={`/add-properties`}><button class="add-property">+ Add Properties</button></Link>{" "}

        </div>
      </div>
    </div>
  );
};

export default DashboardBody;
