import React from "react";
import { home } from "./../styles/style";
import { withStyles } from "@material-ui/core";
import { getCookie } from "./elements/cookie";
import { NavBar } from "./elements/nav";
import { Redirect } from "react-router-dom";

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: getCookie("token1")[1]
    };
  }

  render = () => {
    return (
      <React.Fragment>
        <NavBar value={0} />
        <h1>came here</h1>
        <h1>came here</h1>
        <h1>came here</h1>
        <h1>came here</h1>
        <h1>came here</h1>
      </React.Fragment>
    );
  };
}

const Home = withStyles(home)(HomeComponent);

export { Home };
