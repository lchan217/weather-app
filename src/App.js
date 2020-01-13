import React, { Component } from "react";
import "./App.css";
import WeatherContainer from "../src/components/WeatherContainer";

class App extends Component {
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
      <div className='App'>
        <h1>Weather for Munich </h1>
        <WeatherContainer />
      </div>
    );
  }
}

export default App;
