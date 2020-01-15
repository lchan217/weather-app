import React from "react";
import { Card } from "semantic-ui-react";

const WeatherCard = ({ temps }) => {
  return (
    <div>
      <Card.Group>
        {Object.entries(temps).map(([date, temp]) => {
          return (
            <Card>
              <Card.Content>
                date: {date} - temp: {temp.toFixed(2)}
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    </div>
  );
};

export default WeatherCard;
