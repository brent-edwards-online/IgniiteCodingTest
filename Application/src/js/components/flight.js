import React from "react";

import FlightCard from "./flightcard";

export default class Flight extends React.Component {
  constructor() {
        super();
    }

  render() {
    const flight = this.props.flight;
    const carrier = this.props.carrier;

    return (
      <div class="flight">
        <FlightCard direction="outbound" flightdetail={flight} carriername={carrier.Name}/>
        <FlightCard direction="inbound" flightdetail={flight} carriername={carrier.Name}/>
      </div>
    );
  }
}
