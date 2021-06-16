import React from "react";

//Compoenents
import Home from "./Home";

//Utility imports
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function MainContent() {
  return (
    <div id="main-content">
      <Switch>
        <Route component={Home} exact path="/" />
      </Switch>
    </div>
  );
}
