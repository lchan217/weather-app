import React, { Component } from "react";
import "./App.css";
import WeatherContainer from "./components/weather/WeatherContainer";
import Loading from "../src/components/Loading";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchWeather } from "../src/actions/weatherActions";

class App extends Component {
  componentDidMount() {
    this.props.fetchWeather();
  }

  render() {
    let data;
    if (!this.props.list) {
      data = <Loading />;
    } else {
      data = <WeatherContainer />;
    }
    return (
      <div className='App'>
        <Container>{data}</Container>
      </div>
    );
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
