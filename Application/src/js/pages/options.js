import React from "react";

import Flight from "../components/flight";

export default class Options extends React.Component {
  constructor() {
        super();
        this.state = { flights: [], carriers: [] };
    }
    
    componentDidMount() {
        /*
        fetch(`../../data/flight-options.json`) 
          .then( (response) => {
            return response.json()    
          })
          .then( (json)=> {
            this.setState( {flights:json} );
            console.log( 'Json Result',json );
          });
        */
      
        var flights = fetch(`../../data/flight-options.json`).then((response)=>response.json());
        var carriers = fetch(`../../data/carriers.json`).then((response)=>response.json());
        Promise.all([flights,carriers])
          .then(requestData => {
            this.setState( {flights:requestData[0], carriers: requestData[1]} );  
        });
    }
    
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { article } = params;
    const { date, filter } = query;

    //const FlightOptions = this.state.flights.map((flight, i) => <Flight key={i} flight={flight, this.state.carriers.find(x => x.Id === flight.CarrierId)}/> );
    const FlightOptions = this.state.flights.map((flight, i) => <Flight key={i} flight={flight} carrier={this.state.carriers.find(x => x.Id === flight.CarrierId)}/> );
    return (
      <div class="container">
        <h1>Flight Options</h1>
        <div class="row">{FlightOptions}</div>
      </div>
    );
  }
}
