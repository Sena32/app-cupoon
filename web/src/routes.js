import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import List from "./containers/List";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Cupons" component={List} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
