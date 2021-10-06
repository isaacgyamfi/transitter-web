import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard";
import Complaints from "../pages/dashboard/Complaints";
import Drivers from "../pages/dashboard/Drivers";
import Stations from "../pages/dashboard/Station";
import Taxis from "../pages/dashboard/Taxis";

export default function AppNavigation() {
  return (
    <Switch>
      <Route path="/login" exact render={(props) => <Login {...props} />} />
      <Route path="/" exact render={(props) => <Dashboard {...props} />} />
      <Route
        path="/dashboard/stations"
        exact
        render={(props) => <Stations {...props} />}
      />
      <Route
        path="/dashboard/drivers"
        exact
        render={(props) => <Drivers {...props} />}
      />
      <Route
        path="/dashboard/complains"
        exact
        render={(props) => <Login {...props} />}
      />
      <Route
        path="/dashboard/taxis"
        exact
        render={(props) => <Taxis {...props} />}
      />
      <Route
        path="/dashboard/complaints"
        exact
        render={(props) => <Complaints {...props} />}
      />
    </Switch>
  );
}
