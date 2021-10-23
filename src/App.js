import React from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DetailView from "./Components/DetailView/DetailView";
import Navbar from "./Components/Home/Navbar/Navbar";
import CreatePost from "./Components/CreatePost/CreatePost";
import UpdateBlog from "./Components/UpdateBlog/UpdateBlog";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/createpost" component={CreatePost} />
        <Route exact path="/readmore/:id" component={DetailView} />
        <Route exact path="/updateblog/:id" component={UpdateBlog} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
