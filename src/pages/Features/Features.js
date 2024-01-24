import React from "react";
import "./Features.css";
import Buttons from "../../shared/FormElements/Buttons/Buttons";
const Features = () => {
  return (
    <React.Fragment>
      <h1 className="h1-features">
        Emerging <br /> Tech Titans
      </h1>
      <div className="features-description">
        Startups pioneering the Next <br /> Big breakthroughs
      </div>
      <div className="features-btn">
        <Buttons backgroundColor="black" color="white" padding="40px">
          Get Started
        </Buttons>

        <Buttons backgroundColor="#EEBA2B" color="black" padding="40px" >
          View More
        </Buttons>
      </div>
    </React.Fragment>
  );
};

export default Features;
