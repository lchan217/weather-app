import React, { Component } from "react";

class WeatherCard extends Component {
  showData = () => {
    if (this.props.showF) {
      return Object.entries(this.props.averageF).map(([date, temp]) => {
        return (
          <div>
            date: {date} - temp: {temp.toFixed(2)}
          </div>
        );
      });
    } else {
      return Object.entries(this.props.averageC).map(([date, temp]) => {
        return (
          <div>
            date: {date} - temp: {temp.toFixed(2)}
          </div>
        );
      });
    }
  };
  render() {
    return <div>{this.showData()}</div>;
  }
}

export default WeatherCard;
