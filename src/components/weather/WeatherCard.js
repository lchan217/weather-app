import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import BarChart from "./BarChart";
import Moment from "react-moment";

class WeatherCard extends Component {
  constructor() {
    super();
    this.state = {
      showBar: false,
      date: null
    };
  }
  handleClick = date => {
    this.setState({
      showBar: true,
      date: date
    });
  };

  handleClose = () => {
    this.setState({
      showBar: false
    });
  };

  showBarChart = () => {
    if (this.state.showBar) {
      return (
        <div>
          <button onClick={this.handleClose}>Close</button>
          <BarChart date={this.state.date} showF={this.props.showF} />
          <br />
        </div>
      );
    }
  };

  render() {
    const { temps } = this.props;
    const { handleClick, showBarChart } = this;
    return (
      <div>
        <Card.Group>
          {Object.entries(temps).map(([date, temp]) => {
            return (
              <Card onClick={() => handleClick(date)}>
                <Card.Content>
                  Temp: {temp.toFixed(2)}
                  <br />
                  Date: <Moment format='DD MMM YY'>{date}</Moment>
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
        {showBarChart()}
      </div>
    );
  }
}

export default WeatherCard;
