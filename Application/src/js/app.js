import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Options from "./pages/options";
import Home from "./pages/home";
import Layout from "./pages/layout";
import About from "./pages/about";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="options" name="options" component={Options}></Route>
      <Route path="about" name="about" component={About}></Route>
    </Route>
  </Router>,
app);
