import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Login, Logout } from "./components/Auth";
import { Home } from "./components/Home";
import { Register } from "./components/register";
import { profile } from "./components/profile";
import NotFound from "./components/404";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render = () => {
    return (
      <BrowserRouter>
        <Switch>
          {/* Login Router */}
          <Route component={Login} path="/login" />
          {/* Logout Router */}
          <Route component={Logout} path="/logout" />
          {/* Register Router */}
          <Route component={Register} path="/register" />
          {/* Home Router */}
          <Route component={Home} path="/home" />
          {/* User Profile Router */}
          <Route component={profile} path="/profile" />
          {/* 404 handler */}
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  };
}

export default App;
