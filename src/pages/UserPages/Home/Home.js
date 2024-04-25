import React from "react";
import "./Home.css";
import Cards from "../../../shared/FormElements/Cards/Cards";
import { Link } from "react-router-dom";

const Home = () => {
  const services = [
      {
        name: "Time Tracker",
        path: "/user/time-tracker",
        imgPath: "",
      },
      {
        name: "Leave Tracker",
        path: "/user/leave-tracker",
        imgPath: "",
      },
      {
        name: "Organisation",
        path: "/user/org",
        imgPath: "",
      },
      {
        name: "Files",
        path: "/org",
        imgPath: "",
      },
      {
        name: "Performance",
        path: "/performance",
        imgPath: "",
      },
      {
        name: "Assets",
        path: "/assets",
        imgPath: "",
      },
      {
        name: "Exit Process",
        path: "/exit-process",
        imgPath: "",
      },
    ];

  return (
    <div className="home-page-container">
      <p>All Services</p>
      <div className="services-container">
        <ul>
          {services.map((item,index) => {
            return (
              <li key={index}>
                <Link to={item.path}>
                  <Cards width="fit-content" border="none" backgroundColor="#ebebeb"
                    height="8rem"
                    borderRadius="5px"
                  >
                    {item.name}
                  </Cards>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
