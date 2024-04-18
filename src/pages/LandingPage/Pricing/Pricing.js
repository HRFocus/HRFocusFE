import React from "react";
import "./Pricing.css";
import Cards from "../../../shared/FormElements/Cards/Cards";

const Pricing = () => {
  const listOfFeature = [
    "1 end product",
    "3 Custom Domains",
    "Community support",
    "Ajji soonti",
    "Lorem ipsum",
    "Hello world",
  ];

  return (
    <div className="price-page-container">
      
        <div className="pricing-intro">
          <h1>Convenient Pricing</h1>
          <p className="pricing-para">
            Plan, build, and launch beautiful consistent user interfaces for the
            web that <br />
            drive meaningful engagement and growth for your brand.
          </p>
          <div className="pricing-buttons">
            <button>Monthly</button>
            <button>Annually</button>
          </div>
        </div>
      
      <div className="price-cards-container">
        <Cards>
          <div className="price">
            <h1>
              $49 <span id="light-font-small">/month</span>
            </h1>
          </div>
          <div>
            <h1 id="light-font">Standard</h1>
            <span id="light-font-small">
              The perfect way to get started and
              <br /> get used to our tools
            </span>
            <hr />
            <ul>
              {listOfFeature.map((feature, index) => (
                <li
                  key={index}
                  style={{
                    textDecoration: index >= 3 ? "line-through" : "none",
                  }}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </Cards>
        <Cards>
          <div className="price">
            <h1>
              $49 <span id="light-font-small">/month</span>
            </h1>
          </div>
          <div>
            <h1 id="light-font">Multisite</h1>
            <span id="light-font-small">
              The perfect way to get started and
              <br /> get used to our tools
            </span>
            <hr />
            <ul>
              {listOfFeature.map((feature, index) => (
                <li
                  key={index}
                  style={{
                    textDecoration: index >= 4 ? "line-through" : "none",
                  }}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </Cards>
        <Cards>
          <div className="price">
            <h1>
              $89 <span id="light-font-small">/month</span>
            </h1>
          </div>
          <div>
            <h1 id="light-font">Extended</h1>
            <span id="light-font-small">
              The perfect way to get started and
              <br /> get used to our tools
            </span>
            <hr />
            <ul>
              {listOfFeature.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </Cards>
      </div>
    </div>
  );
};

export default Pricing;
