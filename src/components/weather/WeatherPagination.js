import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import WeatherCard from "./WeatherCard";

const WeatherPagination = props => {
  //start default page at 1
  const [currentPage, setCurrentPage] = useState(1);

  //3 temps per page
  const [tempsPerPage, setTempsPerPage] = useState(3);

  const indexOfLastTemp = currentPage * tempsPerPage;
  const indexOfFirstTemp = indexOfLastTemp - tempsPerPage;

  const keys = Object.keys(props.averages);
  const tempsToShow = keys.slice(indexOfFirstTemp, indexOfLastTemp);
  const currentTemps = {};

  for (let date of tempsToShow) {
    currentTemps[date] = props.averages[date];
  }

  return (
    <div>
      <Icon name='arrow circle left'></Icon>
      <Icon name='arrow circle right'></Icon>
      <WeatherCard temps={currentTemps} />
    </div>
  );
};

export default WeatherPagination;
