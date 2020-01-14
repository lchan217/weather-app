import React from "react";
import { Card } from "semantic-ui-react";

const WeatherCard = props => {
  return (
    <div>
      <Card>
        <Card.Content>
          Date: {props.date} <br />
          Temp: {props.temp.toFixed(2)}
        </Card.Content>
      </Card>
    </div>
  );
};

export default WeatherCard;
