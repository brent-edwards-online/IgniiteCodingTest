import React from "react";
import FlightCard from "./flightcard";

export default class Flight extends React.Component {
  render() {
    const flight = this.props.flight;
    const carrier = this.props.carrier;

    return (
      <div class="flight container">
        <div class="col-md-6 col-sm-12">
          <FlightCard direction="outbound" flightdetail={flight} carriername={carrier.Name}/>
        </div>  
        <div class="col-md-6 col-sm-12">
          <FlightCard direction="inbound" flightdetail={flight} carriername={carrier.Name}/>
        </div>
      </div>
    );
  }
}
