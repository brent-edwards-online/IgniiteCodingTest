import React from "react";

export default class Port extends React.Component {
  constructor() {
        super();
    }

  render() {
    const port = this.props.port;
    const duration = this.props.duration;

    return (
      <div class="port">
        {port}
      </div>
    );
  }
}
