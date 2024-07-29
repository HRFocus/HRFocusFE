import React, { useEffect, useState } from "react";
import "./Home.css";
import { useSelector } from "react-redux";
import Cards from "../../../shared/FormElements/Cards/Cards";
import { Link } from "react-router-dom";
const Home = () => {
 const leaves = useSelector((state) => state.leaves);
 const [empLeaves, setEmpLeaves] = useState(leaves);
 const services = useSelector((state) => state.services);

 useEffect(() => {
   const bearerToken =
     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjcyOGRiYWQ5Yjk4ZTViZGJhYjQ0NTgiLCJpYXQiOjE3MTk5ODczMjIsImV4cCI6MTcyMDA3MzcyMn0.1RyyxDMY1GDposQdNCNfU7_6deJP4bwEyZ2ZlqbKxvc";

   const config = {
     method: "GET",
     headers: {
       Authorization: `Bearer ${bearerToken}`,
       "Content-Type": "application/json",
       "Access-Control-Allow-Origin": "*",
     },
     credentials: "include", 
   };

   fetch("http://localhost:8000/user/leaves/66728dbad9b98e5bdbab4458", config)
     .then((response) => {
       if (!response.ok) {
         throw new Error("Network response was not ok");
       }
       return response.json();
     })
     .then((data) => setEmpLeaves(data.leaves))
     .catch((error) => console.log(error));
 }, []);
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
            {empLeaves.map((items, index) => {
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
                  {empLeaves.length - 1 === index ? "" : <hr />}
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
