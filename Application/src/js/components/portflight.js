import React from "react";

export default class PortFlight extends React.Component {
  constructor() {
        super();
    }

  render() {
    const duration = this.props.duration;

    return (
      <div class="port-flight">
        <i class="fa fa-long-arrow-right fa-2x" aria-hidden="true"></i>
      </div>
    );
  }
}
