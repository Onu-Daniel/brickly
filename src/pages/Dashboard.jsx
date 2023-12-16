import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/Signup.css";
import DashboardBody from "../components/DashboardBody";

const Dashboard = () => {
  return (
    <div>
      <DashboardHeader />
      <DashboardBody />           
      <Footer />
    </div>
  );
};

export default Dashboard;
