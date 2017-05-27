import React from "react";

export default class Port extends React.Component {
  render() {
    const port = this.props.port;
    const duration = this.props.duration;
    let hours = Math.floor(duration / 60);
    let minutes = duration % 60;
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    let portclasses = "port"
    let tooltip = [];
    if(duration > 0)
    {
      portclasses += " port-stopover flight-tooltip";
      tooltip.push(<span class="tip">{hours}h {minutes}m stopover</span>);
    }
      
    return (
      <div class={portclasses}>
        {tooltip}
        {port}
      </div>
    );
  }
}
