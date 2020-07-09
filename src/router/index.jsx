import React from "react";
import { Route, Switch } from "react-router-dom";
import Add from "../views/Add";
import Done from "../views/Done";
import Main from "../views/Main";
import NotFound404 from "../views/NotFound404";

const RouterView = (props) => (
  <Switch>
    <Route path="/done">
      <Done />
    </Route>
    <Route path="/add">
      <Add />
    </Route>
    <Route path="/" exact={true} render={() => <Main {...props} />}></Route>
    <Route path="*">
      <NotFound404 />
    </Route>
  </Switch>
);

export default RouterView;
