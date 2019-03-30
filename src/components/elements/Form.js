import React from "react";
import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel
} from "@material-ui/core/";

/*
    The Form component generates '<form />' tags.

    --> array 'inputs' with objects containing values of Container Input and Select
    --> 'header' = heading to the form.
    --> 'onClick' = click handler to the function.
    --> 'button' = name of the button.
    --> 'disabled' = to enable/disable the button.
    --> 'message' = to display if there is any message
    --> 'messageClass' = class to the message display div
    
*/
class UForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addInputs = () => {
    let { props: p } = this,
      inputs = [];
    for (let i in p.inputs) {
      if (p.inputs[i].type === "checkbox") {
        inputs.push(
          <li key={i}>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={p.inputs[i].handle}
                  color="primary"
                  checked={p.inputs[i].value}
                  name={p.inputs[i].name}
                  id={p.inputs[i].name}
                />
              }
              label={p.inputs[i].labels}
            />
          </li>
        );
      } else {
        inputs.push(
          <li key={i}>
            <TextField
              id={p.inputs[i].name}
              label={p.inputs[i].labels}
              className=""
              onChange={p.inputs[i].handle}
              value={p.inputs[i].value}
              name={p.inputs[i].name}
              helperText={p.validators[i]}
              fullWidth
              type={p.inputs[i].type}
            />
          </li>
        );
      }
    }
    return inputs;
  };

  render = () => {
    let inputs = this.addInputs(),
      button;
    if (this.props.formLoading === false) {
      if (this.props.disabled === true) {
        button = (
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled
            onClick={this.props.onClick}
            className="button"
          >
            {this.props.button}
          </Button>
        );
      } else {
        button = (
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={this.props.onClick}
            className="button"
          >
            {this.props.button}
          </Button>
        );
      }
    } else {
      button = this.props.formLoading;
    }
    return (
      <div>
        <div
          style={{
            color: this.props.messageClass,
            paddingBottom: 1,
            paddingLeft: 60,
            fontStyle: "bold"
          }}
        >
          <p>{this.props.message !== "" ? this.props.message : ""}</p>
        </div>
        <form className={this.props.formClass}>
          <ul>
            {inputs}
            <li>{button}</li>
          </ul>
        </form>
      </div>
    );
  };
}

export { UForm };
