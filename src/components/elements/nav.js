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
  withStyles,
  MenuItem,
  Paper,
  Button,
  Modal,
  Input,
  FormControl,
  InputLabel,
  TextField,
  Select
} from "@material-ui/core";
import loader from "./../../img/loading.gif";
import { DMenu as Menu } from "./menu";
import { Redirect } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import loadingForm from "./../../img/formloading.gif";
import { fetchAsynchronous } from "./../controllers/fetch";
import CircularProgress from "@material-ui/core/CircularProgress";

const NavStyle = {
  backgroundColor: "#ffffff"
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const paper = {
  marginTop: "20vh",
  marginLeft: "20vw",
  marginRight: "20vw",
  borderColor: "white",
  padding: "30px"
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

class AddExp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      formloading: false,
      description: "",
      select_dis: [],
      select_sym: [],
      diseases: [],
      symtoms: []
    };
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleChangeMultiple = event => {
    const options = event.target.value;
    let name = event.target.name;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      value.push(options[i]);
    }
    this.setState({
      [name]: value
    });
  };

  HandleSymptom = data => {
    let dis = [];
    for (let i = 0; i < 50; i++) {
      dis.push(
        <MenuItem
          key={data.symptoms[i].symp_name}
          value={data.symptoms[i].symp_id}
        >
          {data.symptoms[i].symp_name}
        </MenuItem>
      );
    }

    this.setState({ loading: false, symtoms: dis });
  };

  HandleRequest = data => {
    let dis = [];
    for (let i = 0; i < 50; i++) {
      dis.push(
        <MenuItem
          key={data.diseases[i].disease_name}
          value={data.diseases[i].disease_id}
        >
          {data.diseases[i].disease_name}
        </MenuItem>
      );
    }
    this.setState({ diseases: dis });
    let headers = {
      Authorization: "Bearer " + getCookie("token1")[0].value
    };
    fetchAsynchronous(
      "https://slac-backend.herokuapp.com/api/symptoms",
      "GET",
      undefined,
      headers,
      this.HandleSymptom
    );
  };

  componentDidMount() {
    let headers = {
      Authorization: "Bearer " + getCookie("token1")[0].value
    };
    fetchAsynchronous(
      "https://slac-backend.herokuapp.com/api/diseases",
      "GET",
      undefined,
      headers,
      this.HandleRequest
    );
  }

  HandleMainResponse = data => {
    this.setState({
      message: "Added the diagnossis successfully",
      formLoading: false
    });
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
    let data = {
      cure_desc: this.state.description,
      diseases: this.state.select_dis,
      symptoms: this.state.select_sym
    };
    let headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("token1")[0].value
    };
    fetchAsynchronous(
      "https://slac-backend.herokuapp.com/api/experience",
      "POST",
      data,
      headers,
      this.HandleMainResponse
    );
    this.setState({ formLoading: true });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loading === true ? (
          <CircularProgress style={{ marginLeft: "25vw" }} />
        ) : (
          <React.Fragment>
            {" "}
            <Typography variant="h6" id="modal-title">
              Add Daignosis
            </Typography>
            <Grid container spacing={24}>
              <Grid item md={10}>
                <br />
                <p style={{ color: "green" }}>
                  {this.state.message !== "" ? this.state.message : ""}
                </p>
                <br />

                <InputLabel htmlFor="select-multiple">symtoms</InputLabel>
                <Select
                  fullWidth
                  multiple
                  name="select_sym"
                  value={this.state.select_sym}
                  onChange={this.handleChangeMultiple}
                  input={<Input id="select-multiple" />}
                  MenuProps={MenuProps}
                >
                  {this.state.symtoms}
                </Select>
              </Grid>
              <Grid item md={10}>
                <InputLabel htmlFor="select-multiple1">diseases</InputLabel>
                <Select
                  fullWidth
                  multiple
                  name="select_dis"
                  value={this.state.select_dis}
                  onChange={this.handleChangeMultiple}
                  input={<Input id="select-multiple1" />}
                  MenuProps={MenuProps}
                >
                  {this.state.diseases}
                </Select>
              </Grid>
              <Grid item md={10}>
                <TextField
                  fullWidth
                  id="standard-textarea"
                  label="Description"
                  placeholder="Description of the disease treated"
                  multiline
                  margin="normal"
                />
              </Grid>
              <Grid item md={10}>
                {this.state.formLoading === true ? (
                  <img src={loadingForm} />
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.HandleFormSubmit}
                    className="Add"
                    fullWidth
                  >
                    Update
                  </Button>
                )}
              </Grid>
            </Grid>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

class NavBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: getCookie("token1")[1],
      value: this.props.value,
      redirect: undefined,
      open: false
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

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render = () => {
    let component;
    if (this.state.redirect !== undefined) {
      return <Redirect to={this.state.redirect} />;
    }

    if (this.state.isLoggedIn) {
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
                  label="Home"
                  to="/home"
                  component={Link}
                  style={{ color: "#000000" }}
                />
              </Tabs>
            </Grid>
          </Grid>
          <Button onClick={this.handleOpen} color="primary">
            Add Experience
          </Button>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
          >
            <Paper style={paper}>
              <div>
                <AddExp />
              </div>
            </Paper>
          </Modal>
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
