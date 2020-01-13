import React, { Component } from "react";
import "./App.css";
import WeatherContainer from "../src/components/WeatherContainer";
import Loading from "../src/components/Loading";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      city: "",
      isLoading: true
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
          city: response.city,
          isLoading: false
        })
      );
  }
  render() {
    let data;
    if (this.state.isLoading) {
      data = <Loading />;
    } else {
      data = <WeatherContainer list={this.state.list} />;
    }
    return <div className='App'>{data}</div>;
  }
}

export default App;
