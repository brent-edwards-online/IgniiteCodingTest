import React from "react";

import Article from "../components/Article";

export default class Options extends React.Component {
  constructor() {
        super();
        this.state = { items: [] };
    }
    
    componentDidMount() {
        fetch(`http://localhost:8088/api/this/is/an/api/call`) 
            .then(result=> {
                this.setState({items:result.json()});
            });
    }
    
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { article } = params;
    const { date, filter } = query;

    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Fake Article",
      "Partial Article",
      "American Article",
      "Mexican Article",
    ].map((title, i) => <Article key={i} title={title}/> );

    return (
      <div class="container">
        <h1>Flight Options</h1>
        <div class="row">{Articles}</div>
      </div>
    );
  }
}
