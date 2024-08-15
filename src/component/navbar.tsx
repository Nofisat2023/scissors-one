import React from "react";
import { Link } from "react-router-dom";
import "./style/navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul>
          <li>
            <Link className="navigate" to="/">
              Home
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
              <li>
            <Link className="navigate" to="/QrCode">
              QrCode
            </Link>
          </li>
          <li>
            <Link className="navigate" to="/">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
