import React, { Component } from "react";

class WeatherContainer extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      city: ""
    };
  }

  componentDidMount() {
    fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40"
    )
      .then(response => response.json())
      .then(response =>
        this.setState({
          list: response.list,
          city: response.city
        })
      );
  }

  render() {
    return (
      <div>
        <h1>Weather Container</h1>
      </div>
    );
  }
}

export default WeatherContainer;
