import mansionImage from "../public/mansion3.jpg";
import availableImage from "../public/mansion2.jpg";

const Card = () => (
  <div className="card">
    <img src={availableImage} alt="Mansion" className="rectangle-image" />
    <div className="card-info">
      <div className="split-horizontal">
        <div className="split-vertical split-left">
          <p>5bedroom terrace duplex with attached bq</p>
        </div>
        <div className="split-vertical">
          <p><strong>N350,000,000</strong></p>
        </div>
      </div>
      <div className="split-horizontal">
        <div className="split-vertical split-left">
          <p>10 units available</p>
        </div>
        <div className="split-vertical">
          <p><strong>N35,000,000 each</strong></p>
        </div>
      </div>
    </div>
  </div>
);

export default Card;