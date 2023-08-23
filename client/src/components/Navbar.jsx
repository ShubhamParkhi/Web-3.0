import React from "react";
import logo from "../../Images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="nav_logo_container">
          <img src={logo} alt="logo" className="nav_logo" draggable="false" />
        </div>
        <ul>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <span>Transactions</span>
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <span>About Us</span>
            </a>
          </li>
          <button className="btn login-btn">Login</button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
