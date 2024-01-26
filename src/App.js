import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Features from "./pages/Features/Features";
import Support from "./pages/Support/Support";
import Blogs from "./pages/Blogs/Blogs";
import Services from "./pages/Services/Services";
import Login from "./pages/Login/Login";
import Pricing from "./pages/Pricing/Pricing";
// import MainNavigation from "./shared/Navigation/MainNavigation";
import SignUp from "./pages/SignUp/SignUp";
import Navbar from "./shared/Navigation/Navbar";

function App() {
  return (
    <div className="App">
      <main>
        <Router>
        <Navbar/>
          <Switch>
            <Route path="/features" exact>
              <Features />
            </Route>
            <Route path="/support" exact>
              <Support />
            </Route>
            <Route path="/blogs" exact>
              <Blogs />
            </Route>
            <Route path="/services" exact>
              <Services />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/pricing" exact>
              <Pricing />
            </Route>
            <Route path="/new" exact>
              <SignUp />
            </Route>
            <Redirect to="/features" />
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
