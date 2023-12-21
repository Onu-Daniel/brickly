import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";
import DashboardBody from "../components/DashboardBody";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <DashboardHeader />
      <DashboardBody />           
      <Footer />
    </div>
  );
};

export default Dashboard;
