// Body.js
import React from "react";
import "../styles/Body.css";
import mansionImage from "../public/mansion3.jpg";
import availableImage from "../public/mansion2.jpg";
import Card from "../components/Card";

// const Card = () => (
//   <div className="card">
//     <img src={availableImage} alt="Mansion" className="rectangle-image" />
//     <div className="card-info">
//       <div className="split-horizontal">
//         <div className="split-vertical split-left">
//           <p>5bedroom terrace duplex with attached bq</p>
//         </div>
//         <div className="split-vertical">
//           <p><strong>N350,000,000</strong></p>
//         </div>
//       </div>
//       <div className="split-horizontal">
//         <div className="split-vertical split-left">
//           <p>10 units available</p>
//         </div>
//         <div className="split-vertical">
//           <p><strong>N35,000,000 each</strong></p>
//         </div>
//       </div>
//     </div>
//   </div>
// );


const Body = () => {
  const renderCards = () => {
    // Create an array of cards to render
    const cards = Array.from({ length: 3 }, (_, index) => <Card key={index} />);
    return cards;
  };

  return (
    <div className="body-container">
      <div className="rectangle-container">
        <img src={mansionImage} alt="Mansion" className="rectangle-image" />
      </div>

      <div className="split-container">
        <div className="split-item" style={{ flex: "70%" }}>
          <div className="nested-split-container">
            <div className="nested-split-item" style={{ flex: "50%" }}>
              <h3>Available Houses</h3>
              <div className="card-container">{renderCards()}</div>
              <div className="see-more-container">
                <button className="see-more-button">See more</button>
              </div>
            </div>

            <div className="nested-split-item" style={{ flex: "50%" }}>
              <h3>Listed Units</h3>
              <div className="card-container">{renderCards()}</div>
              <div className="see-more-container">
                <button className="see-more-button">See more</button>
              </div>
            </div>
          </div>
        </div>
        <div className="split-item2" style={{ flex: "30%" }}>
          <h3>Forum</h3>
        </div>
      </div>
    </div>
  );
};

export default Body;
