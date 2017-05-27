import React from "react";
import Port from "./port";
import PortFlight from "./portflight"

export default class RouteDetails extends React.Component {
  render() {
    const segments = this.props.segments;
    let html = [];
    let initialPort = segments[0].OriginCode;
    html.push(<Port port={initialPort} />);
    for(let idx = 0; idx < segments.length; idx++)
    {
      let segment = segments[idx];
      let port = segment.DestinationCode;
      let flightDuration = segment.FlightDuration;
      let stopOverDuration = segment.StopOverDuration;
      html.push(<PortFlight duration={flightDuration} />);          
      html.push(<Port port={port} duration={stopOverDuration} />);
    }
                                
    return (
      <div class="route-details">
        {html}
      </div>
    );
  }
}
