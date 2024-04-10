import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../utils/Images/logo.png";
const Navbar = () => {
  return (
      <nav className="nav-links-container">
        <div className="logo">
          <img src={Logo} alt="logo" height={"50px"} />
        </div>
        <div className="page-links">
          <ul>
            <li>
              <NavLink to="/features" exact>
                Features
              </NavLink>
            </li>
            <li>
              <NavLink to="/pricing" exact>
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink to="/support" exact>
                Support
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="users-link">
          <ul>
            <li>
              <NavLink to="/login" exact>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/new" exact>
                Open Account
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
