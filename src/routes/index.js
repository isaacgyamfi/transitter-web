import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Login from '../pages/auth/Login';
import Dashboard from '../pages/dashboard';
import Drivers from '../pages/dashboard/Drivers';
import Stations from '../pages/dashboard/Station';
import Taxis from '../pages/dashboard/Taxis';

export default function AppNavigation() {
  return (
    <Switch>
      <Route path="/login" exact render={(props) => <Login />} />
      <Route path="/" exact render={(props) => <Dashboard />} />
      <Route
        path="/dashboard/stations"
        exact
        render={(props) => <Stations />}
      />
      <Route path="/dashboard/drivers" exact render={(props) => <Drivers />} />
      <Route path="/dashboard/complains" exact render={(props) => <Login />} />
      <Route path="/dashboard/taxis" exact render={(props) => <Taxis />} />
    </Switch>
  );
}
