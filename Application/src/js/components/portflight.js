import React from "react";

export default class PortFlight extends React.Component {
  render() {
    const duration = this.props.duration;
    let hours = Math.floor(duration / 60);
    let minutes = duration % 60;
    if(minutes < 10){
        minutes = "0" + minutes;
    }

    return (
      <div class="port-flight flight-tooltip">
        <i class="fa fa-long-arrow-right fa-2x" aria-hidden="true"></i>
        <span class="tip"><i class="fa fa-plane margin-right-2px" aria-hidden="true"></i>{hours}h {minutes}m</span>
      </div>
    );
  }
}
