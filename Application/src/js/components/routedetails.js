import React from "react";

import Port from "./port";
import PortFlight from "./portflight"

export default class RouteDetails extends React.Component {
  
  
  render() {
    const segments = this.props.segments;
    
    let html = [];
    for(var idx = 0; idx < segments.length; idx++)
    {
      let segment = segments[idx];
      let port = segment.OriginCode;
      let flightduration = segment.FlightDuration;
      let duration = segment.StopOverDuration;
      
      html.push(<Port port={port} />);
      html.push(<PortFlight />);          
    }
                
    let finalDestination = segments[segments.length-1].DestinationCode;
    html.push(<Port port={finalDestination} />);
                
    return (
      <div class="route-details">
        {html}
      </div>
    );
  }
}
