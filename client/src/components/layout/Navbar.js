import React from "react";
import { Link } from "react-router-dom";
import handraze from "../../img/handrazelogow.png";

const Navbar = () => {
  return (
    <nav className="navbar bg-orange">
      <div className="flexcontainer">
        <div>
          <Link to="/">
            <i className="fas fa-code"></i>{" "}
            <img src={handraze} className="logo" alt="student" />
          </Link>
        </div>

        <div className>
          <ul className="navbarText">
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
