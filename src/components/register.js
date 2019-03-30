import React from "react";
import { getCookie } from "./elements/cookie";
import validator, { handleAllFields } from "./controllers/validator";
import { Redirect } from "react-router-dom";
import { NavBar } from "./elements/nav";
import { fetchAsynchronous } from "./controllers/fetch";
import { signup } from "./../api";
import loadingForm from "./../img/formloading.gif";
import {
  Grid,
  Button,
  TextField,
  withStyles,
  Chip,
  InputLabel,
  Select,
  Input,
  Paper,
  Zoom
} from "@material-ui/core";
import { register } from "./../styles/style";
import { RegsiterMenu } from "./../api";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const Menuprops = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

class RegisterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: getCookie("token")[1],
      name: "",
      username: "",
      password: "",
      confirm_password: "",
      experience: "",
      institution: "",
      email: "",
      message: "",
      disabled: true,
      messageClass: "",
      validators: validator,
      formLoading: false,
      checked: false,
      spec: []
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
      "name",
      "username",
      "password",
      "confirm_password",
      "email",
      "institution"
    ];
    let formFieldValues = [
      this.state.name,
      this.state.username,
      this.state.password,
      this.state.confirm_password,
      this.state.email,
      this.state.institution
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
    let s = { marginTop: 0, marginLeft: 50 };
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
    if (this.state.password === this.state.confirm_password) {
      this.setState({ disabled: true });
      let data = {
        name: this.state.name,
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        institution: this.state.institution,
        specs: this.state.spec
      };
      let headers = {
        "Content-Type": "application/json"
      };
      fetchAsynchronous(signup, "POST", data, headers, this.HandleResponse);
    } else {
      this.setState({
        message: "Enter same passwords both the times",
        messageClass: "red",
        formLoading: false,
        disabled: false
      });
    }
  };

  HandleResponse = data => {
    this.setState({
      disabled: false
    });
    if (data.message !== "Created new user!") {
      this.setState({
        message: data.message,
        messageClass: "red",
        formLoading: false,
        disabled: false
      });
    } else {
      this.setState({
        message: data.message,
        messageClass: "green",
        formLoading: false,
        disabled: false
      });
    }
  };

  handleChange = e => {
    const options = e.target.value;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      value.push(options[i]);
    }
    this.setState({
      spec: value
    });
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
      let { classes: cn } = this.props;
      return (
        <Grid container spacing={24}>
          <Grid item md={4} />
          <Grid item md={4}>
            <NavBar value={1} />
            <Zoom in={true}>
              <Paper className={cn.paper}>
                <h4 className={cn.header}>Register</h4>
                <div>
                  <div
                    style={{
                      paddingLeft: 60,
                      color: this.state.messageClass,
                      paddingBottom: 5
                    }}
                  >
                    <div style={{ textAlign: "center" }}>
                      <b>
                        {" "}
                        {this.state.message !== "" ? this.state.message : ""}
                      </b>
                    </div>
                  </div>
                  <form>
                    <Grid container spacing={24} style={{ marginLeft: 20 }}>
                      <Grid item md={5} style={{ marginLeft: "5%" }}>
                        <TextField
                          name="username"
                          onChange={this.HandleAllFields}
                          value={this.state.username}
                          type="text"
                          label="Username"
                          helperText={
                            this.state.validators["username"].errors[0]
                          }
                        />
                      </Grid>
                      <Grid item md={5} style={{ marginLeft: "5%" }}>
                        <TextField
                          name="name"
                          onChange={this.HandleAllFields}
                          value={this.state.name}
                          type="text"
                          label="Name"
                        />
                      </Grid>
                      <Grid item md={5} style={{ marginLeft: "5%" }}>
                        <TextField
                          name="password"
                          onChange={this.HandleAllFields}
                          value={this.state.password}
                          fullWidth
                          type="password"
                          label="Password"
                          helperText={
                            this.state.validators["password"].errors[0]
                          }
                        />
                      </Grid>
                      <Grid item md={5} style={{ marginLeft: "5%" }}>
                        <TextField
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
                          name="email"
                          onChange={this.HandleAllFields}
                          value={this.state.email}
                          type="email"
                          label="Email"
                          helperText={this.state.validators["email"].errors[0]}
                        />
                      </Grid>
                      <Grid item md={5} style={{ marginLeft: "5%" }}>
                        <InputLabel htmlFor="spec">Sepcialization</InputLabel>
                        <Select
                          multiple
                          fullWidth
                          value={this.state.spec}
                          onChange={this.handleChange}
                          input={<Input id="spec" />}
                          renderValue={selected => (
                            <div>
                              {selected.map(value => (
                                <Chip key={value} label={value} />
                              ))}
                            </div>
                          )}
                          MenuProps={Menuprops}
                        >
                          {RegsiterMenu}
                        </Select>
                      </Grid>
                      <Grid item md={5} style={{ marginLeft: 20 }}>
                        <TextField
                          id="Institution"
                          name="institution"
                          onChange={this.HandleAllFields}
                          value={this.state.institution}
                          fullWidth
                          type="text"
                          label="Working Instution"
                          helperText=""
                        />
                      </Grid>
                      <Grid
                        item
                        md={5}
                        style={{
                          marginTop: "25px",
                          marginLeft: "25px"
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
                            fullWidth
                          >
                            Register
                          </Button>
                        )}
                      </Grid>
                    </Grid>
                  </form>
                </div>
              </Paper>
            </Zoom>
          </Grid>
          <Grid item md={4} />
        </Grid>
      );
    }
  };
}

const Register = withStyles(register)(RegisterComponent);
export { Register };
