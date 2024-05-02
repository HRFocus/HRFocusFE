import React, { useState } from "react";
import "./TopNav.css";
import Input from "../../FormElements/Input/Input";
import Buttons from "../../FormElements/Buttons/Buttons";
import { useDispatch } from "react-redux";
import { userLogIn } from "../../../app/slice";
import { useHistory } from "react-router-dom";
const TopNav = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [searchText, setSearchText] = useState("");
    const handleSignOutButton = () => {
        dispatch(userLogIn());
        history.push('/features')
    }
    console.log(searchText);
  return (
    <div className="top-nav-container">
      <div>logo</div>
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
          <form onSubmit={handleSignOutButton}>
              <Buttons type="submit" >Sign Out</Buttons>
          </form>
    </div>
  );
};

export default TopNav;
