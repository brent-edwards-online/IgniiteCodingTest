import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div class="container">
        <h1>Flight Options Exercise</h1>
        
        <h3>Supplied:</h3>
        <ol>
          <li>`flight-options.json`: A JSON array of return flights between Brisbane and Fiji.</li>
          <li>`carriers.json`: A JSON array of carriers that can be used to map names from carrier identifiers.</li>
          <li>`flight-options-shape.ts`: TypeScript interfaces that describe the shape and contents of the data provided in flight-options.json.</li>
          <li>`FlightOptionsMockup.png`: A static mockup of how to display the flight options.</li>
        </ol>
      
        <h3>Required:</h3>
        Your job is to build a UI that closely matches `FlightOptionsMockup.png` and uses the data provided in both `flight-options.json` and `carriers.json`.<br/>
        It should be written in TypeScript (ES6/7 acceptable as well) and should utilise either KnockoutJS or React to demonstrate your familiarity with either of those libraries.<br/>
        Feel free to use any other open-source libraries that will help achieve the desired result. (LoDash/Underscore, Moment, Bootstrap etc.)<br/>
        <br/>
        
        <h4>FlightOptionsMockup.png</h4>
        <img class="mockup" src="./images/FlightOptionsMockup.png" />
        
      </div>
    );
  }
}
