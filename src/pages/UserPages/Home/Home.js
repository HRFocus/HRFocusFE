import React from "react";
import "./Home.css";
import { useSelector } from "react-redux";
import Cards from "../../../shared/FormElements/Cards/Cards";
import { Link } from "react-router-dom";

const Home = () => {
  const services = useSelector((state) => state.services);
  return (
    <div className="home-page-container">
      <p>All Services</p>
      <div className="services-container">
        <ul>
          {services.map((item,index) => {
            return (
              <li key={index}>
                <Link to={item.path}>
                  <Cards
                    width="fit-content"
                    border="none"
                    backgroundColor="#ebebeb"
                    height="8rem"
                    borderRadius="5px"
                  >
                    <span className="icons" >{ item.icons }</span>
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
