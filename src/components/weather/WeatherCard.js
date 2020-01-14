import React from "react";

const WeatherCard = props => {
  return Object.keys(props.averages).map(date => {
    return (
      <li>
        date: {date} = temp: {props.averages[date]}
      </li>
    );
  });
};

export default WeatherCard;
