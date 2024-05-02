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
import Perfomance from "./pages/UserPages/Performance/Perfomance";
import ExitProcess from "./pages/UserPages/ExitProcess/ExitProcess";
import Assets from "./pages/UserPages/Assets/Assets";
function App() {
  let userLogInstate = useSelector((state) => state.userLoggedIn);
  console.log("user logged in status", userLogInstate);
 
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
            {userLogInstate && (
              <Route path="/user">
                <TopNav />
                <SideNav />
                <Switch>
                  <Route path="/user/home">
                    <Home />
                  </Route>
                  <Route path="/user/time-tracker">
                    <TimeTracker />
                  </Route>
                  <Route path="/user/leave-tracker">
                    <LeaveTracker />
                  </Route>
                  <Route path="/user/org">
                    <Organisation />
                  </Route>
                  <Route path="/user/performance">
                    <Perfomance/>
                  </Route>
                 <Route path="/user/files">
                    <Files/>
                  </Route>
                 <Route path="/user/exit-process">
                    <ExitProcess/>
                  </Route>
                 <Route path="/user/assets">
                    <Assets/>
                  </Route>
                </Switch>
                <Redirect to="/user/home" />
              </Route>
            )}
            {!userLogInstate ? (
              <Route path="/">
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
              </Route>
            ) : (
              <Redirect to="/user/home" />
            )}
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;