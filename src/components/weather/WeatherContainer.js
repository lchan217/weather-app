import React, { Component } from "react";
import { connect } from "react-redux";
import Radio from "@material-ui/core/Radio";
import WeatherCard from "./WeatherCard";

class WeatherContainer extends Component {
  showCard = () => {
    //calculate average temp of dates available in api
    let tempObject = {};
    let countObject = {};
    for (let item of this.props.list) {
      let date = item.dt_txt.slice(0, 10);
      tempObject[date]
        ? (tempObject[date] += item.main.temp)
        : (tempObject[date] = item.main.temp);

      countObject[date] ? (countObject[date] += 1) : (countObject[date] = 1);
    }

    //create object with date as key and average as value
    let averageObject = {};
    for (let date in tempObject) {
      averageObject[date] = tempObject[date] / countObject[date];
    }

    for (let [key, value] of Object.entries(averageObject)) {
      console.log(`${key}: ${value}`);
    }

    return (
      <div className='weather-card'>
        <WeatherCard averages={averageObject} />
      </div>
    );
  };

  render() {
    return (
      <div>
        <h1>Weather Container</h1>
        <ul>
          <li>c or f toggle</li>
          {<Radio />} Celcius {<Radio />} Fahrenheit <br />
          <li>arrows</li> <br />
          <li>Card Data</li>
          {this.showCard()}
          <br />
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
