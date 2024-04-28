import React from 'react'
import "./SideNav.css"

import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HomeIcon from "@mui/icons-material/Home";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import BusinessIcon from "@mui/icons-material/Business";
import DevicesIcon from "@mui/icons-material/Devices";
import { NavLink } from 'react-router-dom';
const SideNav = () => {
  return (
    <aside className="side-nav-container">
      <ul>
        <li>
          <NavLink to="/user/home" activeClassName="active-link">
            <HomeIcon />
            <span className="link-text">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/time-tracker" activeClassName="active-link">
            <AccessAlarmsIcon />
            <span className="link-text">Time Tracker</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/leave-tracker" activeClassName="active-link">
            <CalendarMonthIcon />
            <span className="link-text">Leave Tracker</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/org" activeClassName="active-link">
            <BusinessIcon />
            <span className="link-text">Organisation</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/files" activeClassName="active-link">
            <InsertDriveFileIcon />
            <span className="link-text">Files</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/performance" activeClassName="active-link">
            <EmojiEventsIcon />
            <span className="link-text">Performance</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/assets" activeClassName="active-link">
            <DevicesIcon />
            <span className="link-text">Assets</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/exit-process" activeClassName="active-link">
            <ExitToAppIcon />
            <span className="link-text">Exit Process</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default SideNav
