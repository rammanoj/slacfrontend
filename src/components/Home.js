import React from "react";
import { home } from "./../styles/style";
import { withStyles } from "@material-ui/core";
import { getCookie } from "./elements/cookie";
import { NavBar } from "./elements/nav";
import { Redirect } from "react-router-dom";
import loadingComp from "./../img/loading.gif";
import {
  MenuItem,
  InputLabel,
  Input,
  Select,
  Grid,
  Paper,
  Chip,
  Avatar,
  Button
} from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import { fetchAsynchronous } from "./controllers/fetch";

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

class ListV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  render = () => {
    return (
      <React.Fragment>
        <Paper style={{ marginTop: 50, padding: 10 }}>
          <Grid container spacing={24}>
            <Grid item md={8}>
              <h3>Name of the disease</h3>
              <p>
                These are the list of all Symtoms and searched symtoms for the
                disease
              </p>
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip
                label={"sample text"}
                onClick=""
                style={{ background: "#a4f2f0" }}
                clickable
                icon={<FaceIcon />}
              />{" "}
              <Chip
                label={"sample text"}
                onClick=""
                clickable
                style={{ background: "#a4f2f0" }}
                icon={<FaceIcon />}
              />{" "}
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
            </Grid>
            <Grid item md={2} />
            <Grid item md={2}>
              <Chip style={{ marginTop: 30 }} label={"2.64"} color="primary" />
            </Grid>
          </Grid>
        </Paper>
        <Paper style={{ marginTop: 50, padding: 10 }}>
          <Grid container spacing={24}>
            <Grid item md={8}>
              <h3>Name of the disease</h3>
              <p>
                These are the list of all Symtoms and searched symtoms for the
                disease
              </p>
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip
                label={"sample text"}
                onClick=""
                style={{ background: "#a4f2f0" }}
                clickable
                icon={<FaceIcon />}
              />{" "}
              <Chip
                label={"sample text"}
                onClick=""
                clickable
                style={{ background: "#a4f2f0" }}
                icon={<FaceIcon />}
              />{" "}
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
            </Grid>
            <Grid item md={2} />
            <Grid item md={2}>
              <Chip style={{ marginTop: 30 }} label={"2.64"} color="primary" />
            </Grid>
          </Grid>
        </Paper>
        <Paper style={{ marginTop: 50, padding: 10 }}>
          <Grid container spacing={24}>
            <Grid item md={8}>
              <h3>Name of the disease</h3>
              <p>
                These are the list of all Symtoms and searched symtoms for the
                disease
              </p>
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip
                label={"sample text"}
                onClick=""
                style={{ background: "#a4f2f0" }}
                clickable
                icon={<FaceIcon />}
              />{" "}
              <Chip
                label={"sample text"}
                onClick=""
                clickable
                style={{ background: "#a4f2f0" }}
                icon={<FaceIcon />}
              />{" "}
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
            </Grid>
            <Grid item md={2} />
            <Grid item md={2}>
              <Chip style={{ marginTop: 30 }} label={"2.64"} color="primary" />
            </Grid>
          </Grid>
        </Paper>
        <Paper style={{ marginTop: 50, padding: 10 }}>
          <Grid container spacing={24}>
            <Grid item md={8}>
              <h3>Name of the disease</h3>
              <p>
                These are the list of all Symtoms and searched symtoms for the
                disease
              </p>
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip
                label={"sample text"}
                onClick=""
                style={{ background: "#a4f2f0" }}
                clickable
                icon={<FaceIcon />}
              />{" "}
              <Chip
                label={"sample text"}
                onClick=""
                clickable
                style={{ background: "#a4f2f0" }}
                icon={<FaceIcon />}
              />{" "}
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
            </Grid>
            <Grid item md={2} />
            <Grid item md={2}>
              <Chip style={{ marginTop: 30 }} label={"2.64"} color="primary" />
            </Grid>
          </Grid>
        </Paper>
        <Paper style={{ marginTop: 50, padding: 10 }}>
          <Grid container spacing={24}>
            <Grid item md={8}>
              <h3>Name of the disease</h3>
              <p>
                These are the list of all Symtoms and searched symtoms for the
                disease
              </p>
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip
                label={"sample text"}
                onClick=""
                style={{ background: "#a4f2f0" }}
                clickable
                icon={<FaceIcon />}
              />{" "}
              <Chip
                label={"sample text"}
                onClick=""
                clickable
                style={{ background: "#a4f2f0" }}
                icon={<FaceIcon />}
              />{" "}
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
            </Grid>
            <Grid item md={2} />
            <Grid item md={2}>
              <Chip style={{ marginTop: 30 }} label={"2.64"} color="primary" />
            </Grid>
          </Grid>
        </Paper>
        <Paper style={{ marginTop: 50, padding: 10 }}>
          <Grid container spacing={24}>
            <Grid item md={8}>
              <h3>Name of the disease</h3>
              <p>
                These are the list of all Symtoms and searched symtoms for the
                disease
              </p>
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip
                label={"sample text"}
                onClick=""
                style={{ background: "#a4f2f0" }}
                clickable
                icon={<FaceIcon />}
              />{" "}
              <Chip
                label={"sample text"}
                onClick=""
                clickable
                style={{ background: "#a4f2f0" }}
                icon={<FaceIcon />}
              />{" "}
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
            </Grid>
            <Grid item md={2} />
            <Grid item md={2}>
              <Chip style={{ marginTop: 30 }} label={"2.64"} color="primary" />
            </Grid>
          </Grid>
        </Paper>
        <Paper style={{ marginTop: 50, padding: 10 }}>
          <Grid container spacing={24}>
            <Grid item md={8}>
              <h3>Name of the disease</h3>
              <p>
                These are the list of all Symtoms and searched symtoms for the
                disease
              </p>
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip
                label={"sample text"}
                onClick=""
                style={{ background: "#a4f2f0" }}
                clickable
                icon={<FaceIcon />}
              />{" "}
              <Chip
                label={"sample text"}
                onClick=""
                clickable
                style={{ background: "#a4f2f0" }}
                icon={<FaceIcon />}
              />{" "}
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
            </Grid>
            <Grid item md={2} />
            <Grid item md={2}>
              <Chip style={{ marginTop: 30 }} label={"2.64"} color="primary" />
            </Grid>
          </Grid>
        </Paper>
        <Paper style={{ marginTop: 50, padding: 10 }}>
          <Grid container spacing={24}>
            <Grid item md={8}>
              <h3>Name of the disease</h3>
              <p>
                These are the list of all Symtoms and searched symtoms for the
                disease
              </p>
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip
                label={"sample text"}
                onClick=""
                style={{ background: "#a4f2f0" }}
                clickable
                icon={<FaceIcon />}
              />{" "}
              <Chip
                label={"sample text"}
                onClick=""
                clickable
                style={{ background: "#a4f2f0" }}
                icon={<FaceIcon />}
              />{" "}
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
            </Grid>
            <Grid item md={2} />
            <Grid item md={2}>
              <Chip style={{ marginTop: 30 }} label={"2.64"} color="primary" />
            </Grid>
          </Grid>
        </Paper>
        <Paper style={{ marginTop: 50, padding: 10 }}>
          <Grid container spacing={24}>
            <Grid item md={8}>
              <h3>Name of the disease</h3>
              <p>
                These are the list of all Symtoms and searched symtoms for the
                disease
              </p>
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip
                label={"sample text"}
                onClick=""
                style={{ background: "#a4f2f0" }}
                clickable
                icon={<FaceIcon />}
              />{" "}
              <Chip
                label={"sample text"}
                onClick=""
                clickable
                style={{ background: "#a4f2f0" }}
                icon={<FaceIcon />}
              />{" "}
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip avatar={<Avatar>X</Avatar>} label={"sample text"} />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
              <Chip
                style={{ marginTop: 1 }}
                avatar={<Avatar>X</Avatar>}
                label={"sample text"}
              />{" "}
            </Grid>
            <Grid item md={2} />
            <Grid item md={2}>
              <Chip style={{ marginTop: 30 }} label={"2.64"} color="primary" />
            </Grid>
          </Grid>
        </Paper>
      </React.Fragment>
    );
  };
}

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: getCookie("token1")[1],
      search: [],
      name: [],
      completed: false,
      loading: false,
      list: false,
      data: ""
    };
  }

  handleChangeMultiple = event => {
    const options = event.target.value;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      value.push(options[i]);
    }
    this.setState({
      search: value
    });
  };

  HandleResponse = () => {
    // take the user input and fetch the api and give out the response as a listview.
  };

  HandleRequest = data => {
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

    this.setState({ name: dis, loading: false });
  };

  componentDidMount() {
    let headers = {
      Authorization: "Bearer " + getCookie("token1")[0].value
    };
    fetchAsynchronous(
      "https://slac-backend.herokuapp.com/api/symptoms",
      "GET",
      undefined,
      headers,
      this.HandleRequest
    );
  }

  HandleResponse = () => {
    this.setState({ list: true });
  };

  render = () => {
    return (
      <React.Fragment>
        <NavBar value={0} />
        {this.state.loading === true ? (
          <img
            src={loadingComp}
            style={{ marginLeft: "30vw", marginTop: "25vw" }}
          />
        ) : (
          <Grid
            container
            spacing={24}
            style={{ marginLeft: "10vw", marginTop: "10vh" }}
          >
            <Grid item md={10}>
              <InputLabel htmlFor="select-multiple">Symtoms</InputLabel>
              <Select
                fullWidth
                multiple
                value={this.state.search}
                onChange={this.handleChangeMultiple}
                input={<Input id="select-multiple" />}
                MenuProps={MenuProps}
                renderValue={selected => (
                  <div>
                    {selected.map(value => (
                      <Chip key={value} label={value} />
                    ))}
                  </div>
                )}
              >
                {this.state.name}
              </Select>
              <Grid ite md={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.HandleResponse}
                  style={{ marginTop: 5, marginLeft: "40vw" }}
                >
                  search
                </Button>
              </Grid>
              {this.state.list === true ? (
                <ListV data={this.state.search} />
              ) : (
                ""
              )}
            </Grid>
          </Grid>
        )}
      </React.Fragment>
    );
  };
}

const Home = withStyles(home)(HomeComponent);

export { Home };
