//
//This is how you should include the css and any other documents.
// import '../Assets/Css/App.css';
import "./Assets/Css/App.css";
//using the react router helps alot beacuse it doesnt send the requests to the
//server but only injects the required page.

import Home from "./components/Home";
import About from "./components/About";
import Lands from "./components/Lands";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//
//
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>{" "}
          <Route path="/About">
            <About />
          </Route>{" "}
          <Route path="/Lands">
            <Lands />
          </Route>{" "}
          <Route path="/Contact">
            <Contact />
          </Route>{" "}
        </Switch>{" "}
      </div>{" "}
    </Router>
  );
}
//
//export the app so as it can be used in the indexjs
export default App;
