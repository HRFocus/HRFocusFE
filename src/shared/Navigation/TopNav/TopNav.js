import React, { useState } from "react";
import "./TopNav.css";
import Input from "../../FormElements/Input/Input";
import Buttons from "../../FormElements/Buttons/Buttons";
import { useDispatch } from "react-redux";
import { userLogOut } from "../../../app/slice";
import { useHistory } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logoSrc from "../../../utils/Images/logo.png"
const TopNav = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [searchText, setSearchText] = useState("");
    const handleSignOutButton = () => {
        dispatch(userLogOut());
        history.push('/features')
    }
    console.log(searchText);
  return (
    <div className="top-nav-container">
      <div className="logo" style={{margin:0}}>
        <img src={ logoSrc} alt="logo" height="50vh" />
      </div>
      <div>
        <Input
          type="text"
          color="black"
          border="0.5px solid black"
          borderRadius="5px"
          padding="8px 15px"
          placeholder="Search..."
          backgroundColor="transparent"
          fontSize="80%"
          width="20vw"
          setValue={setSearchText}
        />
      </div>
      <div className="user-mgmt">
        <Buttons handleClick={handleSignOutButton} backgroundColor="transparent" height="5vh" width="90px">Sign Out</Buttons>
        <div className="profile-container"> <AccountCircleIcon fontSize="large"/> </div>
      </div>
    </div>
  );
};

export default TopNav;
