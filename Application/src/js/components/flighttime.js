import React from "react";

export default class FlightTime extends React.Component {
  formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  
  formatDate(date) {
    let result = "";
    switch(date.getDay()){
      case 0: result = "Sun, "; break;
      case 1: result = "Mon, "; break;
      case 2: result = "Tue, "; break;
      case 3: result = "Wed, "; break;
      case 4: result = "Thu, "; break;
      case 5: result = "Fri, "; break;
      case 6: result = "Sat, "; break;
    }
    
    result += date.getDate();
    result += " "
    switch(date.getMonth()){
      case 0: result += "Jan"; break;
      case 1: result += "Feb"; break;
      case 2: result += "Mar"; break;
      case 3: result += "Apr"; break;
      case 4: result += "May"; break;
      case 5: result += "Jun"; break;
      case 6: result += "Jul"; break;
      case 7: result += "Aug"; break;
      case 8: result += "Sep"; break;
      case 9: result += "Oct"; break;
      case 10: result += "Nov"; break;
      case 11: result += "Dec"; break;
    }
    
    return result;
  }
  
  render() {
    const segments = this.props.segments;
    let departure = new Date(segments[0].DepartureDate);
    let arrival = new Date(segments[segments.length-1].ArrivalDate);
    let departureString = this.formatAMPM(departure);
    let arrivalString = this.formatAMPM(arrival);
    
    let arrivalDateString = '';
    if( departure.toDateString() !== arrival.toDateString()){
      arrivalDateString = <p class="arrival-time" >{this.formatDate(arrival)}</p>;
    }
    
    
    return (
      <div class="flight-time">
        <h2>{departureString}<span class="font-normal"> to </span>{arrivalString}</h2>
        {arrivalDateString}
      </div>
    );
  }
}