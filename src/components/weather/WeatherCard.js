import React from "react";
import { Card } from "semantic-ui-react";
import Moment from "react-moment";

const WeatherCard = props => {
  return (
    <div>
      <Card>
        <Card.Content>
          Date: <Moment format='DD MMM YY'>{props.date}</Moment> <br />
          Temp: {props.temp.toFixed(2)}
        </Card.Content>
      </Card>
    </div>
  );
};

export default WeatherCard;
