import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLoggedIn: localStorage.getItem("isUserLoggedIn") || false,
  services: [
    {
      name: "Time Tracker",
      path: "/user/time-tracker",
      icons: "⏰",
      imgPath: "/assets/img/Timer.jpg",
      enabled: true,
    },
    {
      name: "Leave Tracker",
      path: "/user/leave-tracker",
      imgPath: "",
      icons: "🗓️",
      enabled: true,
    },
    {
      name: "Organisation",
      path: "/user/org",
      imgPath: "",
      enabled: true,
      icons: "🏢",
    },
    {
      name: "Files",
      path: "/user/files",
      icons: "",
      imgPath:
        "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      enabled: true,
    },
    {
      name: "Performance",
      path: "/user/performance",
      imgPath: "",
      icons: "",
      enabled: true,
    },
    {
      name: "Assets",
      path: "/user/assets",
      imgPath: "",
      icons: "",
      enabled: true,
    },
    {
      name: "Exit Process",
      path: "/user/exit-process",
      imgPath: "",
      icons: "",
      enabled: false,
    },
  ],
};


const handleUserLogIn = (state, action) => {
    let negateLoggedInStatus = !state.userLoggedIn;
    state.userLoggedIn = negateLoggedInStatus;
    localStorage.setItem("isUserLoggedIn", negateLoggedInStatus);
    console.log("User has Logged", state.userLoggedIn? "In" : "Out" );
}


export const slice = createSlice({
    name: "logIn",
    initialState,
    reducers: {
        userLogIn: handleUserLogIn,
    }
})

export const { userLogIn } = slice.actions;
export default slice.reducer;