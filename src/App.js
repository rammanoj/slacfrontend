import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Login, Logout, ForgotPassword } from "./components/Auth";
import { Register } from "./components/register";
import { Profile } from "./components/profile";
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
          {/* Frogot Password Router */}
          <Route component={ForgotPassword} path="/forgotpassword" />
          {/* Logout Router */}
          <Route component={Logout} path="/logout" />
          {/* Register Router */}
          <Route component={Register} path="/register" />
          {/* User Profile Router */}
          <Route component={Profile} path="/profile" />
          {/* 404 handler */}
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  };
}

export default App;
