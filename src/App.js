import React from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>

        {/* <Route exact path="/about" component={<About />} />
        <Route exact path="/contact" component={<Contact />} /> */}
      </Switch>
    </Router>
  );
};

export default App;
