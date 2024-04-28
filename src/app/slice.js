import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userLoggedIn: localStorage.getItem("isUserLoggedIn") || false
}

const handleUserLogIn = (state,action) => {
    state.userLoggedIn = !state.userLoggedIn;
    localStorage.setItem("isUserLoggedIn", !state.userLoggedIn);
    console.log("User has Logged", state.userLoggedIn? "In" : "Out" );
}

export const slice = createSlice({
    name: "logIn",
    initialState,
    reducers: {
        userLogIn : handleUserLogIn
    }
})

export const { userLogIn } = slice.actions;
export default slice.reducer;