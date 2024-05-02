import React, { useState } from "react";
import "./TopNav.css";
import Input from "../../FormElements/Input/Input";
import Buttons from "../../FormElements/Buttons/Buttons";
import { useDispatch } from "react-redux";
import { userLogOut } from "../../../app/slice";
import { useHistory } from "react-router-dom";
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
          color="rgb(140, 137, 137)"
          border="1px solid rgb(215, 214, 214)"
          borderRadius="5px"
          padding="8px 15px"
          placeholder="Search..."
          setValue={setSearchText}
        />
      </div>
      <div>
        <Buttons handleClick={handleSignOutButton}>Sign Out</Buttons>
      </div>
    </div>
  );
};

export default TopNav;
