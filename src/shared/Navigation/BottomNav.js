import React from 'react'
import'./BottomNav.css'
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  return (
    <nav className="bottom-nav-container">
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
    </nav>
  );
}

export default BottomNav
