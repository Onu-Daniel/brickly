import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/Addproperties.css";

const AddProperties = () => {
  return (
    <div>
      <div className="signup-body">
        <div className="addp">
          <h1 className="topic">Sell a Property</h1>
          <form action="">
            <div className="form-inside">
              <label htmlFor="address">Wallet Address:</label>
              <input
                type=""
                className="input-field"
                id="address"
                placeholder="Input Wallet Address or Click Connect wallet"
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

            <div className="form-inside">
              <label htmlFor="description">Description of Property:</label>
              <textarea
                type=""
                className="input-field description-box"
                id="description"
                placeholder="Enter the description of the property"
              />
            </div>

            <div className="form-inside">
              <label htmlFor="location">Address of the property:</label>
              <input
                type=""
                className="input-field"
                id="location"
                placeholder="Enter the Address of the property"
              />
            </div>

            <div className="form-inside">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                className="input-field"
                id="price"
                placeholder="Enter the amount for the property"
              />
            </div>

            <div className="form-inside">
              <label htmlFor="unit">No of units:</label>
              <input
                type="number"
                className="input-field"
                id="unit"
                placeholder="Enter your No of units available"
              />
            </div>

            <div className="form-inside">
              <label htmlFor="symbol">Symbol:</label>
              <input
                type=""
                className="input-field"
                id="symbol"
                placeholder="Enter three letter symbol eg: 'BRC'"
              />
            </div>

            <div className="form-inside">
              <label htmlFor="image">Upload Image:</label>
              <input type="file" accept="image/*" id="image" />
            </div>

            <button type="submit" className="register-button">
              Add Property
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AddProperties;
