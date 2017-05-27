import React from "react";

import Flight from "../components/flight";

//import FlightOption from "../models/flightoptionsshape";

export default class Options extends React.Component {
  constructor() {
        super();
        this.state = { flights: [], carriers: [] };
    }
    
    componentDidMount() {
        var flights = fetch(`../../data/flight-options.json`).then((response)=>response.json());
        var carriers = fetch(`../../data/carriers.json`).then((response)=>response.json());
        Promise.all([flights,carriers])
          .then(requestData => {
            this.setState( {flights:requestData[0], carriers: requestData[1]} );  
        });
    }
    
  render() {
    const { query } = this.props.location;
    //const { params } = this.props;
    //const { article } = params;
    //const { date, filter } = query;

    const FlightOptions = this.state.flights.map((flight, i) => <Flight key={i} flight={flight} carrier={this.state.carriers.find(x => x.Id === flight.CarrierId)}/> );
    
    return (
      <div class="container">
        <h1>Flight Options</h1>
        <div class="row">{FlightOptions}</div>
      </div>
    );
  }
}