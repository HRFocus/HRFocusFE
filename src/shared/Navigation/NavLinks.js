import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css"
const NavLinks = () => {
  return (
    <div className="nav-links-container">
    <div className="logo">
        logo
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
              Prices
            </NavLink>
          </li>
          <li>
            <NavLink to="/support" exact>
              Support
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" exact>
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" exact>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/Support" exact>
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
    </div>
  );
};

export default NavLinks;
