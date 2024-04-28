import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLoggedIn: localStorage.getItem("isUserLoggedIn") || false,
  services:
    [
      {
        name: "Time Tracker",
        path: "/user/time-tracker",
        imgPath: "",
        enabled:true
      },
      {
        name: "Leave Tracker",
        path: "/user/leave-tracker",
        imgPath: "",
        enabled:true
      },
      {
        name: "Organisation",
        path: "/user/org",
        imgPath: "",
        enabled:true
      },
      {
        name: "Files",
        path: "/user/files",
        imgPath: "",
        enabled:true
      },
      {
        name: "Performance",
        path: "/user/performance",
        imgPath: "",
        enabled:true
      },
      {
        name: "Assets",
        path: "/user/assets",
        imgPath: "",
        enabled:true
      },
      {
        name: "Exit Process",
        path: "/user/exit-process",
        imgPath: "",
        enabled:false
      },
    ] ,
};


const handleUserLogIn = (state,action) => {
    state.userLoggedIn = !state.userLoggedIn;
    localStorage.setItem("isUserLoggedIn", !state.userLoggedIn);
    console.log("User has Logged", state.userLoggedIn? "In" : "Out" );
}


export const slice = createSlice({
    name: "logIn",
    initialState,
    reducers: {
        userLogIn: handleUserLogIn,
    }
})

export const { userLogIn, userServices } = slice.actions;
export default slice.reducer;