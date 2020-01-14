import React, { Component } from "react";
import { connect } from "react-redux";

class WeatherContainer extends Component {
  render() {
    return (
      <div>
        <h1>Weather Container</h1>
        <ul>
          <li>c or f toggle</li>
          <li>arrows</li>
          <li>cards</li>
          <li>bar graph</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.list
  };
};

export default connect(mapStateToProps)(WeatherContainer);
