import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Features from "./pages/LandingPage/Features/Features";
import Support from "./pages/LandingPage/Support/Support";
import Login from "./pages/Login/Login";
import Pricing from "./pages/LandingPage/Pricing/Pricing";
import SignUp from "./pages/SignUp/SignUp";
import Navbar from "./shared/Navigation/Navbar";
import BottomNav from "./shared/Navigation/BottomNav";
import Home from "./pages/Home/Home";

function App() {
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
            <Route path="/user">
              {/* Any navbar */}
              <Switch>
                <Route path="/user/home">
                <Home/>  
                </Route>
              </Switch>
            </Route>
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
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
