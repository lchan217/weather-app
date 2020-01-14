import React, { Component } from "react";
import "./App.css";
import WeatherContainer from "../src/components/WeatherContainer";
import Loading from "../src/components/Loading";

import { connect } from "react-redux";
import { fetchWeather } from "../src/actions/weatherActions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.props.fetchWeather();
  }

  render() {
    let data;
    if (this.state.isLoading) {
      data = <Loading />;
    } else {
      data = <WeatherContainer />;
    }
    return <div className='App'>{data}</div>;
  }
}

const mapStateToProps = state => {
  return {
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWeather: () => dispatch(fetchWeather())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
