import React from "react";
import { getCookie } from "./../elements/cookie";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Grid,
  withStyles
} from "@material-ui/core";
import loader from "./../../img/loading.gif";
import { DMenu as Menu } from "./menu";
import { Redirect } from "react-router-dom";

const NavStyle = {
  backgroundColor: "#ffffff"
};

class PaginateLoading extends React.Component {
  constructor(props) {
    super(props);
  }

  render = classname => (
    <div className={classname}>
      <div className="loader">
        <svg className="circular" viewBox="25 25 50 50">
          <circle
            className="path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
    </div>
  );
}

class NavBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: getCookie("token")[1],
      value: this.props.value,
      redirect: undefined
    };
  }

  HandleTabClick = (e, v) => {
    this.setState({ value: v });
  };

  HandleMenuClick = key => {
    this.setState({ redirect: "/" + key.toLowerCase() });
  };

  componentWillUnmount() {
    this.setState({ redirect: undefined });
  }

  render = () => {
    let component;
    if (this.state.redirect !== undefined) {
      return <Redirect to={this.state.redirect} />;
    }

    if (this.state.isLoggedIn) {
      let role = getCookie("user").role;
      if (role === "Teacher" || role === "Student" || role === "Unpaid") {
        role = false;
      } else {
        role = true;
      }
      let open = Boolean(this.state.profile);
      component = (
        <React.Fragment>
          <Grid container spacing={40} justify="flex-start">
            <Grid item>
              <Typography variant="headline" name="logo">
                <a
                  href=""
                  style={{
                    textDecoration: "none",
                    color: "black"
                  }}
                >
                  logo
                </a>
              </Typography>
            </Grid>
            <Grid item>
              <Tabs
                value={this.state.value}
                indicatorColor="primary"
                onChange={this.HandleTabClick}
                variant="standard"
              >
                <Tab
                  label="Dashboard"
                  to="/dashboard"
                  component={Link}
                  style={{ color: "#000000" }}
                />
                {role ? (
                  <Tab
                    label="Users"
                    to="/users"
                    component={Link}
                    style={{ color: "#000000" }}
                  />
                ) : (
                  ""
                )}
              </Tabs>
            </Grid>
          </Grid>
          <Menu
            label="profile"
            body={["Profile", "Logout"]}
            HandleMenuClick={this.HandleMenuClick}
            iconType="profile"
          />
        </React.Fragment>
      );
    } else {
      component = (
        <Grid container spacing={24} justify="space-between">
          <Grid item>
            <Typography variant="headline" name="logo">
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color: "black"
                }}
              >
                logo
              </a>
            </Typography>
          </Grid>
          <Grid item>
            <Tabs
              value={this.state.value}
              indicatorColor="primary"
              onChange={this.HandleTabClick}
              variant="standard"
            >
              <Tab
                label="login"
                style={{ color: "#000000" }}
                to="/login"
                component={Link}
              />
              <Tab
                label="Signup"
                style={{ color: "#000000" }}
                to="/register"
                component={Link}
              />
            </Tabs>
          </Grid>
        </Grid>
      );
    }

    return (
      <div>
        <AppBar position="fixed" style={NavStyle}>
          <Toolbar>{component}</Toolbar>
        </AppBar>
      </div>
    );
  };
}

class Loading extends React.Component {
  render() {
    return <img src={loader} alt="Loading...." className="loading" />;
  }
}

const NavBar = NavBarComponent;

export { NavBar, Loading, PaginateLoading };
