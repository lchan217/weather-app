import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import BarChart from "./BarChart";

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
          <BarChart date={this.state.date} />
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
                  date: {date} - temp: {temp.toFixed(2)}
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
