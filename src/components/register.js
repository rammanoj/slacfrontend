import React from "react";
import { getCookie } from "./elements/cookie";
import validator, { handleAllFields } from "./controllers/validator";
import { Redirect } from "react-router-dom";
import { NavBar } from "./elements/nav";
import { fetchAsynchronous } from "./controllers/fetch";
import { signup, states } from "./../api";
import loadingForm from "./../img/formloading.gif";
import {
  Grid,
  Button,
  TextField,
  Select,
  InputLabel,
  withStyles
} from "@material-ui/core";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: getCookie("token")[1],
      username: "",
      password: "",
      confirm_password: "",
      email: "",
      message: "",
      disabled: true,
      messageClass: "",
      validators: validator,
      formLoading: false,
      checked: false
    };
  }

  updateState = (name, value) => {
    this.setState({ [name]: value });
    return this.state[name];
  };

  componentDidMount() {
    this.setState({ checked: true });
  }

  HandleAllFields = e => {
    let { name, value } = e.target;
    let formFields = [
      "username",
      "password",
      "confirm_password",
      "email",
      "select"
    ];
    let formFieldValues = [
      this.state.username,
      this.state.password,
      this.state.confirm_password,
      this.state.email
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
      username: "",
      password: "",
      confirm_password: "",
      email: "",
      message: "",
      disabled: true,
      success: false,
      messageClass: "",
      validators: validator
    });
  };

  componentWillUnmount = () => {
    this.HandleClearForm();
  };

  HandleFormSubmit = e => {
    e.preventDefault();
    let s = { marginTop: -40 };
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
      username: this.state.username,
      password: this.state.password,
      confirm_password: this.state.confirm_password,
      email: this.state.email
    };
    let headers = {
      "Content-Type": "application/json"
    };
    fetchAsynchronous(signup, "POST", data, headers, this.HandleResponse);
  };

  HandleResponse = data => {
    this.setState({
      disabled: false
    });
    if (data.error === 1) {
      // Error occured, show the error
      this.setState({
        message: data.message,
        messageClass: "red",
        formLoading: false,
        disabled: false
      });
    } else {
      localStorage.setItem("mobile", this.state.mobile);
      this.setState({ success: true });
    }
  };

  render = () => {
    document.body.style = "background: #fafafa;";
    let { state: obj } = this;
    if (obj.isLoggedIn) {
      return <Redirect to="/dashboard" />;
    } else {
      if (this.state.success) {
        return (
          <Redirect
            to={{
              pathname: "/mobileverify"
            }}
          />
        );
      }
      document.body.style = "background: #fafafa;";
      return (
        <Grid container spacing={24}>
          <Grid item md={4} />
          <Grid item md={4}>
            <NavBar value={1} />
            <div className="signup_component">
              <h4>Register</h4>
              <div className="signup">
                <div
                  style={{
                    paddingLeft: 60,
                    color: this.state.messageClass,
                    paddingBottom: 5
                  }}
                >
                  <b> {this.state.message !== "" ? this.state.message : ""}</b>
                </div>
                <form>
                  <Grid container spacing={24} style={{ marginLeft: 20 }}>
                    <Grid item md={5} style={{ marginLeft: "5%" }}>
                      <TextField
                        id="username"
                        name="username"
                        onChange={this.HandleAllFields}
                        value={this.state.username}
                        type="text"
                        label="Username"
                        helperText={this.state.validators["username"].errors[0]}
                      />
                    </Grid>
                    <Grid item md={5} style={{ marginLeft: "5%" }}>
                      <TextField
                        id="email"
                        name="email"
                        onChange={this.HandleAllFields}
                        value={this.state.email}
                        type="email"
                        label="Email"
                        helperText={this.state.validators["email"].errors[0]}
                      />
                    </Grid>
                    <Grid item md={5} style={{ marginLeft: "5%" }}>
                      <TextField
                        id="password"
                        name="password"
                        onChange={this.HandleAllFields}
                        value={this.state.password}
                        fullWidth
                        type="password"
                        label="Password"
                        helperText={this.state.validators["password"].errors[0]}
                      />
                    </Grid>
                    <Grid item md={5} style={{ marginLeft: "5%" }}>
                      <TextField
                        id="confirm_password"
                        name="confirm_password"
                        onChange={this.HandleAllFields}
                        value={this.state.confirm_password}
                        fullWidth
                        type="password"
                        label="Re-Type Password"
                        helperText={
                          this.state.validators["confirm_password"].errors[0]
                        }
                      />
                    </Grid>
                    <Grid item md={5} style={{ marginLeft: "5%" }}>
                      <TextField
                        id="mobile"
                        name="mobile"
                        onChange={this.HandleAllFields}
                        value={this.state.mobile}
                        fullWidth
                        type="text"
                        label="Mobile"
                        helperText={this.state.validators["mobile"].errors[0]}
                      />
                    </Grid>
                    <Grid item md={5} style={{ marginLeft: "5%" }}>
                      <InputLabel htmlFor="state">State</InputLabel>
                      <Select
                        value={this.state.state}
                        onChange={this.HandleAllFields}
                        fullWidth
                        inputProps={{
                          name: "state",
                          id: "state"
                        }}
                      >
                        {states}
                      </Select>
                    </Grid>
                    <Grid
                      item
                      md={12}
                      style={{
                        marginTop: "25px",
                        marginLeft: "25px",
                        marginRight: "25px"
                      }}
                    >
                      {this.state.formLoading !== false ? (
                        this.state.formLoading
                      ) : (
                        <Button
                          variant="contained"
                          color="primary"
                          disabled={this.state.disabled}
                          onClick={this.HandleFormSubmit}
                          className="register"
                        >
                          Register
                        </Button>
                      )}
                    </Grid>
                  </Grid>
                </form>
              </div>
            </div>
          </Grid>
          <Grid item md={4} />
        </Grid>
      );
    }
  };
}

export { Register };
