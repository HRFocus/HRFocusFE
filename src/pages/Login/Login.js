import React from "react";
import "./Login.css";
import { useHistory } from 'react-router-dom';
import loginImage from "../../utils/Images/loginPageImg.png";
import logo from "../../utils/Images/logo.png";
import Input from "../../shared/FormElements/Input/Input";
import Buttons from "../../shared/FormElements/Buttons/Buttons";
const Login = () => {
  const history = useHistory();
  const signUpButtonHandler = () =>{
    history.push('/new')
  };
  return (
    <div className="login-container">
      <div className="form-section">
        <div className="name-logo">
          <img src={logo} alt={logo} />
          <h1> HRFOCUS</h1>
        </div>
        <div className="welcome-text">
          <h1>Welcome</h1>
          <p>Let's get started!</p>
        </div>
        <form className="login-form">
          <fieldset>
            <legend>Email</legend>
            <Input type="text" backgroundColor="#171710" colot="white" />
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            <Input type="password" backgroundColor="#171710" colot="white" />
          </fieldset>

          <Buttons
            backgroundColor="#eeba2b"
            width="100%"
            height="3rem"
            borderRadius="50px"
            marginLeft="-0.1rem"
          >
            Sign In
          </Buttons>
          <hr/>
          <Buttons
            backgroundColor="white"
            width="100%"
            height="3rem"
            borderRadius="50px"
            marginLeft="-0.1rem"
            onClick={signUpButtonHandler}
          >
            Sign Up
          </Buttons>
        </form>
      </div>
      <div className="image-section">
        <img src={loginImage} alt={"login"} height={"75%"} />
      </div>
    </div>
  );
};

export default Login;
