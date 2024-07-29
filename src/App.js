import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Features from "./pages/LandingPage/Features/Features";
import Support from "./pages/LandingPage/Support/Support";
import Login from "./pages/Login/Login";
import Pricing from "./pages/LandingPage/Pricing/Pricing";
import SignUp from "./pages/SignUp/SignUp";
import Navbar from "./shared/Navigation/Navbar";
import BottomNav from "./shared/Navigation/BottomNav";
import Home from "./pages/UserPages/Home/Home";
import SideNav from "./shared/Navigation/SideNav/SideNav";
import TimeTracker from "./pages/UserPages/TimeTracker/TimeTracker";
import Organisation from "./pages/UserPages/OrgTree/Organisation";
import Files from "./pages/UserPages/Files/Files";
import LeaveTracker from "./pages/UserPages/LeaveTracker/LeaveTracker";
import TopNav from "./shared/Navigation/TopNav/TopNav";
import Performance from "../src/pages/UserPages/Performance/Perfomance";
import ExitProcess from "./pages/UserPages/ExitProcess/ExitProcess";
import Assets from "./pages/UserPages/Assets/Assets";

function App() {
  let userLogInstate = useSelector((state) => state.userLoggedIn);
  console.log("user logged in status", userLogInstate);

  let routes;
  if (userLogInstate) {
    routes = (
      <React.Fragment>
        <TopNav />
        <SideNav />
        <Switch>
          <Route path="/user/home" exact>
            <Home />
          </Route>
          <Route path="/user/time-tracker" exact>
            <TimeTracker />
          </Route>
          <Route path="/user/leave-tracker" exact>
            <LeaveTracker />
          </Route>
          <Route path="/user/org" exact>
            <Organisation />
          </Route>
          <Route path="/user/performance" exact>
            <Performance />
          </Route>
          <Route path="/user/files" exact>
            <Files />
          </Route>
          <Route path="/user/exit-process" exact>
            <ExitProcess />
          </Route>
          <Route path="/user/assets" exact>
            <Assets />
          </Route>
          <Redirect to="/user/home" />
        </Switch>
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Navbar />
        <BottomNav />
        <Switch>
          <Route path="/features" exact>
            <Features />
          </Route>
          <Route path="/support" exact>
            <Support />
          </Route>
          <Route path="/pricing" exact>
            <Pricing />
          </Route>
          <Redirect to="/features" />
        </Switch>
      </React.Fragment>
    );
  }

  return (
    <div className="App">
      <main>
        <Router>
          <Switch>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/new" exact>
              <SignUp />
            </Route>
            {routes}
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
