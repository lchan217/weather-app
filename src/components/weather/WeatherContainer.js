import React, { Component } from "react";
import { connect } from "react-redux";
import WeatherPagination from "./WeatherPagination";
import { Form, Radio, Icon } from "semantic-ui-react";

class WeatherContainer extends Component {
  constructor() {
    super();
    this.state = {
      showFahrenheit: true
    };
  }
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
      avgC[date] = avgK[date] - 273.15;
      avgF[date] = ((avgK[date] - 273.15) * 9) / 5 + 32;
    }

    //logic to pass F or C data to card
    if (this.state.showFahrenheit) {
      return (
        <div>
          <WeatherPagination averages={avgF} />
        </div>
      );
    } else {
      return (
        <div>
          <WeatherPagination averages={avgC} />
        </div>
      );
    }
  };

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

  render() {
    return (
      <div>
        <h1>Weather Container</h1>
        <ul>
          <Form>
            <Form.Field>
              Selected value: <b>{this.state.value}</b>
            </Form.Field>
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
          <Icon name='huge arrow circle left'></Icon>
          <Icon name='huge arrow circle right'></Icon>
          <br />
          <br />
          <br />
          <br />
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
