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
  leaves: [
    {
      name: "Independence day",
      date: "15 - Aug",
      type:"Mandatory",
      day: "Tuesday"
    },
  {
      name: "Gandhi Jayanthi",
      date: "02 - Oct",
      type:"Mandatory",
      day: "Friday"
    },
  {
      name: "Republic day",
      date: "24 - Jan",
      type:"Mandatory",
      day: "Monday"
    },
  {
      name: "Kannada Rajyothsava",
      date: "01 - November",
      type:"Mandatory",
      day: "Wednesday"
    },
  {
      name: "May day",
      date: "01 - May",
      type:"Mandatory",
      day: "Wednesday"
    },
  {
      name: "Any day",
      date: "15 - Jun",
      type:"Optional",
      day: "Wednesday"
    },
  {
      name: "Today",
      date: "1 - Aug",
      type:"Optional",
      day: "Tuesday"
    },
  {
      name: "Today",
      date: "1 - Aug",
      type:"",
      day: "Tuesday"
    },
  {
      name: "Today",
      date: "1 - Aug",
      type:"Optional",
      day: "Tuesday"
    },
  {
      name: "Today",
      date: "1 - Aug",
      type:"Regional",
      day: "Tuesday"
    },
  ],

};


const handleUserLogIn = (state, action) => {
    
    state.userLoggedIn = true;
    localStorage.setItem("isUserLoggedIn", true);
    console.log("User has Logged In");
}
const handleUserLogOut = (state, action) => {
  localStorage.removeItem("isUserLoggedIn");
  state.userLoggedIn = false;
  localStorage.setItem("isUserLoggedIn", false);
  console.log("User has Logged OUT");
};


export const slice = createSlice({
    name: "logIn",
    initialState,
    reducers: {
      userLogIn: handleUserLogIn,
      userLogOut:handleUserLogOut
    }
})

export const { userLogIn, userLogOut } = slice.actions;
export default slice.reducer;