import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import loginImage from "../../utils/Images/loginPageImg.png";
import logo from "../../utils/Images/logo.png";
import Input from "../../shared/FormElements/Input/Input";
import { MdArrowBack } from "react-icons/md";
import Buttons from "../../shared/FormElements/Buttons/Buttons";
import { useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleUserSignIn = () => {
    if (email.trim() !== "" && password.trim() !== "") {
      history.push('/user/home')
    } else {
      alert("Please Enter user name and password")
    }
  }


  return (
    <div className="login-container">
      <div className="back-to-home">
        <Link to="/features">
          <MdArrowBack />
          Back to home
        </Link>
      </div>
      <div className="form-section">
        <div className="name-logo">
          <img src={logo} alt={logo} />
          <h1> HRFOCUS</h1>
        </div>
        <div className="welcome-text">
          <h1>Welcome</h1>
          <p>Let's get started!</p>
        </div>
        <form className="login-form" onSubmit={handleUserSignIn}>
          <fieldset>
            <legend>Email</legend>
            <Input
              type="text"
              backgroundColor="#171710"
              color="white"
              required={true}
              setValue={setEmail}
            />
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            <Input
              type="password"
              backgroundColor="#171710"
              color="white"
              required={true}
              setValue={setPassword}
            />
          </fieldset>
          <Buttons
            backgroundColor="#eeba2b"
            width="100%"
            height="3rem"
            borderRadius="50px"
            marginLeft="-0.1rem"
            type="submit"
          >
            Sign In
          </Buttons>
          Don't have any Account? <Link to="/new">Create one</Link>
        </form>
      </div>
      <div className="image-section">
        <img src={loginImage} alt={"login"} />
      </div>
    </div>
  );
};

export default Login;
