import React, { Component } from "react";
import { connect } from "react-redux";
import Radio from "@material-ui/core/Radio";

class WeatherContainer extends Component {
  show = () => {
    //calculate average temp of dates available in api
    //time that has already passed is not included in average
    let tempObject = {}; //total temp by date
    let countObject = {}; // total count by date
    for (let item of this.props.list) {
      let date = item.dt_txt.slice(0, 10);
      tempObject[date]
        ? (tempObject[date] += item.main.temp)
        : (tempObject[date] = item.main.temp);

      countObject[date] ? (countObject[date] += 1) : (countObject[date] = 1);
    }

    let averageObject = {};
    for (let date in tempObject) {
      averageObject[date] = tempObject[date] / countObject[date];
    }
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
          {this.show()}
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
