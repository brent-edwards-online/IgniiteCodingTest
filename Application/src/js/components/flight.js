import React from "react";

export default class Flight extends React.Component {
  render() {
    const flight = this.props.flight;
    const carrier = this.props.carrier;

    return (
      <div class="col-md-4">
        <h4>{carrier.Name}</h4>
        <p>Adult: {flight.AdultSaleTotal}</p>
      </div>
    );
  }
}
