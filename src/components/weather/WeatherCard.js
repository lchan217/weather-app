import React from "react";

const WeatherCard = ({ temps }) => {
  return (
    <div>
      <h1>WeatherCard</h1>
      {Object.entries(temps).map(([date, temp]) => {
        return (
          <div>
            date: {date} - temp: {temp.toFixed(2)}
          </div>
        );
      })}
    </div>
  );
};

export default WeatherCard;
