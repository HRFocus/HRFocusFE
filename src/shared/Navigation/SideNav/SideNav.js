import React from 'react'
import "./SideNav.css"
import { Link } from "react-router-dom";
import { MdHome } from 'react-icons/md';
import { MdTimer } from 'react-icons/md';
import { MdCalendarMonth } from 'react-icons/md';
import { MdHomeWork } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
const SideNav = () => {
  return (
    <aside className="side-nav-container">
      <ul>
        <li>
          <NavLink to="/user/home"activeClassName="active-link">
            <MdHome />
            <span className="link-text">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/time-tracker"activeClassName="active-link">
            <MdTimer />
            <span className="link-text">Time Tracker</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/leave-tracker" activeClassName="active-link">
            <MdCalendarMonth />
            <span className="link-text">
            Leave Tracker
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/org"activeClassName="active-link">
            <MdHomeWork />
            <span className="link-text">
            Organisation
            </span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default SideNav
