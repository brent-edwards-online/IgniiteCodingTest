import React from "react";
import FlightTime from "./flighttime";
import RouteDetails from "./routedetails";
import FlightDuration from  "./flightduration";

export default class FlightCard extends React.Component {
  render() {
    const flightdetail = this.props.flightdetail;
    const carrierName = this.props.carriername;
    const direction = this.props.direction;
    
    let segments = null;
    
    if(direction == "outbound"){
      if(flightdetail.OutboundJourney)
        segments = flightdetail.OutboundJourney.Segments
    }
    else{
      if(flightdetail.InboundJourney)
        segments = flightdetail.InboundJourney.Segments
    }
    
    if(segments != null)
    {
      return (
        <div class="flight-card col-md-5">
          <div class="data-container">
            <h1>{carrierName}</h1>
            <FlightTime segments={segments} />
            <RouteDetails segments={segments} />
            <FlightDuration segments={segments} />
          </div>
        </div>
      );  
    }
    else{
      return (
        <div class="flight-card col-md-5 display-none">
          <div class="data-container">
            <h1>{carrierName}</h1>
            <h2>No Flight</h2>
          </div>
        </div>
      );
    }
  }
}
