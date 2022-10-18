import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signin from "./Signin";
import Profile from "./Profile";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
