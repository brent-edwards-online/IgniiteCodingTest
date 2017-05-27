import React from "react";

export default class FlightDuration extends React.Component {
  render() {
    const segments = this.props.segments;
    let duration = 0;
    for(var idx = 0; idx < segments.length; idx++)
    {
      duration += (segments[idx].FlightDuration + segments[idx].StopOverDuration);    
    }
    let hours = Math.floor(duration / 60);
    let minutes = duration % 60;
  
    return (
      <div class="flight-duration">{hours}h {minutes}m</div>
    );
  }
}