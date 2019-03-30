import React from "react";
import { getCookie, setCookie, deleteCookie } from "./elements/cookie";
import validator, { handleAllFields } from "./controllers/validator";
import { Redirect, Link as RouteLink } from "react-router-dom";
import { NavBar } from "./elements/nav";
import { UForm } from "./elements/Form";
import { fetchAsynchronous } from "./controllers/fetch";
import loading from "./../img/loading.gif";
import { login, logout } from "./../api";
import loadingForm from "./../img/formloading.gif";
import { Grid, Link, Zoom, Button, Paper, withStyles } from "@material-ui/core";
import { login as loginStyle } from "./../styles/style";

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: getCookie("token")[1],
      user: "",
      password: "",
      remember_me: false,
      message: "",
      disabled: true,
      messageColor: "",
      validators: validator,
      formLoading: false
    };
  }

  updateState = (name, value) => {
    this.setState({ [name]: value });
    return this.state[name];
  };

  componentDidMount() {
    this.setState({ loading: false, hide: "" });
  }

  getInputs = () => {
    let labels = ["Username", "Password", "Remember me"];
    let name = ["user", "password", "remember_me"];
    let type = ["text", "password", "checkbox"];
    let value = [this.state.user, this.state.password, this.state.remember_me];
    let inputs = [];
    for (let i in name) {
      let obj = {};
      obj.name = name[i];
      obj.type = type[i];
      obj.id = name[i];
      obj.labels = labels[i];
      obj.value = value[i];
      obj.handle = this.HandleAllFields;
      inputs.push(obj);
    }
    return inputs;
  };

  HandleAllFields = e => {
    let { name, value } = e.target;
    if (name === "remember_me") {
      let { checked } = e.target;
      value = checked;
    }
    let formFields = ["user", "password", "remember_me"];
    let formFieldValues = [
      this.state.user,
      this.state.password,
      this.state.remember_me
    ];
    handleAllFields(
      name,
      value,
      formFields,
      formFieldValues,
      true,
      validator,
      this.updateState
    );
  };

  HandleClearForm = () => {
    this.setState({
      user: "",
      password: "",
      remember_me: false,
      message: "",
      disabled: true,
      messageClass: "red",
      validators: validator
    });
  };

  componentWillUnmount = () => {
    this.HandleClearForm();
  };

  HandleFormSubmit = e => {
    e.preventDefault();
    let s = { marginLeft: 30, marginTop: -10 };
    this.setState({
      message: "",
      formLoading: (
        <img
          src={loadingForm}
          alt="Loading...."
          style={s}
          className="loading"
        />
      )
    });

    this.setState({ disabled: true });
    let data = {
      username: this.state.user,
      password: this.state.password
    };
    let headers = {
      "Content-Type": "application/json"
    };
    fetchAsynchronous(login, "POST", data, headers, this.HandleResponse);
  };

  HandleResponse = data => {
    this.setState({
      disabled: false,
      formLoading: false
    });
    if (data.hasOwnProperty("message")) {
      // Error occured, show the error
      this.setState({ message: data.message, messageClass: "red" });
    } else {
      // set the cookies and redirect to home page.
      let date = Date.now() + 90 * 60 * 60 * 24 * 1000;
      let cookies = [
        {
          key: "token",
          value: data.token,
          age: date
        },
        {
          key: "role",
          value: data.user,
          age: date
        }
      ];
      setCookie(cookies);
      this.setState({ isLoggedIn: true });
    }
  };

  render = () => {
    let { state: s } = this;
    let { classes: cn } = this.props;
    if (s.isLoggedIn) {
      // return to the home page
      return <Redirect to="/home" />;
    } else {
      document.body.style = "background: #fafafa;";
      let inputs = this.getInputs();
      // render the components
      return (
        <Grid container spacing={24}>
          <Grid item sm={4} />
          <Grid item sm={4}>
            <NavBar value={0} />
            <Zoom in={true}>
              <Paper className={cn.paper}>
                <h3 className={cn.header}>Login</h3>
                <UForm
                  formLoading={this.state.formLoading}
                  formClass="formStyle"
                  onClick={this.HandleFormSubmit}
                  button="Login"
                  disabled={this.state.disabled}
                  message={this.state.message}
                  messageClass={this.state.messageClass}
                  inputs={inputs}
                  validators={[
                    this.state.validators["user"].errors[0],
                    this.state.validators["password"].errors[0]
                  ]}
                />
                <Link
                  style={{ marginLeft: "8vw" }}
                  component={RouteLink}
                  to="/register"
                >
                  Don't have account ?
                </Link>{" "}
              </Paper>
            </Zoom>
          </Grid>
          <Grid item sm={4} />
        </Grid>
      );
    }
  };
}

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: getCookie("token")[1],
      text: "",
      loading: (
        <div style={{ marginTop: "30vh", marginLeft: "40vw" }}>
          <img src={loading} alt="loadng" />
        </div>
      )
    };
  }

  componentDidMount() {
    // call the 'LOGOUT API' and 'DELETE THE STORED COOKIES'
    if (this.state.isLoggedIn) {
      let headers = {
        Authorization: "Token " + getCookie("token")[0].value
      };
      fetchAsynchronous(
        logout,
        "POST",
        undefined,
        headers,
        this.HandleResponse
      );
    } else {
      this.setState({ loading: false, text: "You have already logged out !!" });
    }
  }

  HandleResponse = response => {
    deleteCookie(["token", "user", "role"]);
    if (response.error === 0) {
      this.setState({
        loading: false,
        text: "You have successfully logged out!!"
      });
    } else {
      this.setState({ loading: false, text: "You have already logged out!!" });
    }
  };

  render = () => {
    document.body.style = "background: #fafafa;";
    // logout the user
    return (
      <React.Fragment>
        {this.state.loading === false ? (
          <React.Fragment>
            <NavBar value={false} />
            <Grid container spaces={24} style={{ marginTop: "30vh" }}>
              <Grid item md={4} />
              <Grid item md={4}>
                <Zoom in={true}>
                  <Paper>
                    <div style={{ padding: 20 }}>
                      <h4 style={{ color: "green", marginLeft: "20%" }}>
                        {this.state.text}
                      </h4>
                      <RouteLink
                        style={{
                          marginLeft: "10vw",
                          textDecoration: "none"
                        }}
                        to="/login"
                      >
                        <Button color="primary">Login back ?</Button>
                      </RouteLink>
                    </div>
                  </Paper>
                </Zoom>
              </Grid>
              <Grid item md={4} />
            </Grid>
          </React.Fragment>
        ) : (
          this.state.loading
        )}
      </React.Fragment>
    );
  };
}

const Login = withStyles(loginStyle)(LoginComponent);
export { Login, Logout };
