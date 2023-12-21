import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Card from '../components/Card';
import DashboardHeader from "../components/DashboardHeader";



const Sell = () => {
  return (
    <div>
      <DashboardHeader/>
      <Card />
      <Footer />
    </div>
  );
};

export default Sell;
