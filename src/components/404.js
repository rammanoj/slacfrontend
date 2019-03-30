import React from "react";

export default class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => (
    <React.Fragment>
      <h1>404</h1>
      <h2>Page Not Found</h2>
    </React.Fragment>
  );
}
