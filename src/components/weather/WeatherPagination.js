import React, { Component } from "react";
import { Icon } from "semantic-ui-react";

class WeatherPagination extends Component {
  render() {
    return (
      <div>
        {" "}
        <Icon name='huge arrow circle left'></Icon>
        <Icon name='huge arrow circle right'></Icon>
      </div>
    );
  }
}

export default WeatherPagination;
