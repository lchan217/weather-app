import React, { Component } from "react";
import { connect } from "react-redux";
import WeatherPagination from "./WeatherPagination";
import { Form, Radio } from "semantic-ui-react";
import "./css/WeatherContainer.css";

class WeatherContainer extends Component {
  constructor() {
    super();
    this.state = {
      showFahrenheit: true
    };
  }

  handleRadio = (e, { value }) => {
    if (value === "Celcius") {
      this.setState({
        showFahrenheit: false
      });
    } else {
      this.setState({
        showFahrenheit: true
      });
    }
  };

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

    //create object with date as key and average as value in K
    let avgK = {};
    for (let date in tempObject) {
      avgK[date] = tempObject[date] / countObject[date];
    }

    //convert to C and F
    let avgC = {};
    let avgF = {};
    for (let date in avgK) {
      avgC[date] = (avgK[date] - 273.15).toFixed(2) + " C";
      avgF[date] = (((avgK[date] - 273.15) * 9) / 5 + 32).toFixed(2) + " F";
    }

    //logic to pass F or C data to card
    if (this.state.showFahrenheit) {
      return (
        <div>
          <WeatherPagination
            averages={avgF}
            showF={this.state.showFahrenheit}
          />
        </div>
      );
    } else {
      return (
        <div>
          <WeatherPagination
            averages={avgC}
            showF={this.state.showFahrenheit}
          />
        </div>
      );
    }
  };

  render() {
    return (
      <div className='weather-container'>
        <h1 className='center'>Weather Forecast for Munich</h1>
        <ul>
          <Form>
            <Form.Field>
              <Radio
                label='Celcius'
                name='radioGroup'
                value='Celcius'
                checked={this.state.showFahrenheit === false}
                onChange={this.handleRadio}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Fahrenheit'
                name='radioGroup'
                value='Fahrenheit'
                checked={this.state.showFahrenheit === true}
                onChange={this.handleRadio}
              />
            </Form.Field>
          </Form>
          <br />
          {this.showCard()}
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
