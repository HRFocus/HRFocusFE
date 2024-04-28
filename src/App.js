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
import LeaveTracker from "./pages/UserPages/LeaveTracker/LeaveTracker";
function App() {
  const userLogInstate = useSelector((state) => state.userLoggedIn);
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
            {userLogInstate &&
              <Route path="/user">
                {/* Any navbar */}
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
                </Switch>
                <Redirect to="/user/home" />
              </Route>
            }
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
