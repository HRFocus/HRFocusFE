import React from "react";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import "./SignUp.css";
import logo from "../../utils/Images/logo.png";
import Buttons from "../../shared/FormElements/Buttons/Buttons";
import Input from "../../shared/FormElements/Input/Input";
import signupImg from "../../utils/Images/signupimg.png";
const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="back-to-home">
        <Link to="/features">
          <MdArrowBack />
          Back to home
        </Link>
      </div>
      <div className="left-section">
        <div className="signup-logo">
          <img src={logo} alt={logo} height={"100%"} />
        </div>
        <div className="signin">
          <h1>Welcome Back!</h1>
          <p>Already have an account? </p>
          <p> Login here</p>
          <div className="signin-button">
            <Link to="/login">
              <Buttons>Sign In</Buttons>
            </Link>
          </div>
        </div>
        <div className="exrta-image">
          <img src={signupImg} alt="singupImg" height={"40%"} />
        </div>
      </div>
      <div className="right-section">
        <h1>Create Account</h1>
        <form className="signup-form">
          <fieldset>
            <legend>Name</legend>
            <Input type="text" color="black" />
          </fieldset>
          <fieldset>
            <legend>Email</legend>
            <Input type="text" color="black" />
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            <Input type="password" color="black" />
          </fieldset>
          <fieldset>
            <legend>Confirm Password</legend>
            <Input type="password" color="black" />
          </fieldset>
          <Buttons>Sign Up</Buttons>
        </form>
        <div className="or-signIn">
          <hr />
          <Link to="/login">
            <Buttons
              backgroundColor="black"
              width="100%"
              height="3rem"
              borderRadius="10px"
              marginLeft="-0.1rem"
            >
              Sign In
            </Buttons>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
