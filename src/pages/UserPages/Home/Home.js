import React from "react";
import "./Home.css";
import { useSelector } from "react-redux";
import Cards from "../../../shared/FormElements/Cards/Cards";
import { Link } from "react-router-dom";

const Home = () => {
  const services = useSelector((state) => state.services);
  const leaves = useSelector((state) => state.leaves);
  return (
    <div className="home-page-container">
      <p>All Services</p>
      <div className="services-container">
        <ul>
          {services.map((item, index) => {
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
                    <span className="icons">{item.icons}</span>
                    {item.name}
                  </Cards>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="annual-leaves-container">
        <h3>Annual leaves</h3>
        <div>
          <ul className="leave-lists">
            {leaves.map((items, index) => {
              return (
                <li key={index}>
                  <div className="div-sep">
                    <p>{items.name}</p>
                    <p>{items.date}</p>
                  </div>
                  <div className="div-sep" style={{ fontSize: "13px" }}>
                    <p>({items.type})</p>
                    <p>{items.day}</p>
                  </div>
                  {leaves.length - 1 === index ? "" : <hr />}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
