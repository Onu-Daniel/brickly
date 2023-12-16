import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <Link to={`/`}><h3>Brickly</h3></Link>
        <div className="centered-buttons">
          <button>Available Houses</button>
          <button>Listed Units</button>
          <button>Buy Land</button>
          <button>Rent</button>
          <button>Forum</button>
        </div>
        <div className="right-buttons">
          <Link to={`/login`}>
            <button className="login">Login</button>
          </Link>
          <Link to={`/signup`}>
            <button className="signup">Sign up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
