import React from "react";

export default class FlightTime extends React.Component {
  
  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  
  render() {
    const segments = this.props.segments;
    
    let departure = new Date(segments[0].DepartureDate);
    let arrival = new Date(segments[segments.length-1].ArrivalDate);
    
    let departureString = this.formatAMPM(departure);
    let arrivalString = this.formatAMPM(arrival);
    
    return (
      <div class="flight-time">
        <h2>{departureString}<span class="font-normal"> to </span>{arrivalString}</h2>
      </div>
    );
  }
}