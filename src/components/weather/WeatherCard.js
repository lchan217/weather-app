import React, { Component } from "react";
import { Card } from "semantic-ui-react";

class WeatherCard extends Component {
  showData = () => {
    if (this.props.showF) {
      return Object.entries(this.props.averageF).map(([date, temp]) => {
        return (
          <div>
            <Card>
              <Card.Description>
                date: {date} <br />
                temp: {temp.toFixed(2)} F
              </Card.Description>
            </Card>
          </div>
        );
      });
    } else {
      return Object.entries(this.props.averageC).map(([date, temp]) => {
        return (
          <Card>
            <Card.Description>
              date: {date} <br />
              temp: {temp.toFixed(2)} C
            </Card.Description>
          </Card>
        );
      });
    }
  };
  render() {
    return <div>{this.showData()}</div>;
  }
}

export default WeatherCard;
