import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import WeatherCard from "./WeatherCard";

class WeatherPagination extends Component {
  constructor() {
    super();
    this.state = { currentPage: 1, tempsPerPage: 3 };
  }

  showPerPage = () => {
    const indexOfLastTemp = this.state.currentPage * this.state.tempsPerPage;
    const indexOfFirstTemp = indexOfLastTemp - this.state.tempsPerPage;

    const keys = Object.keys(this.props.averages);
    const tempsToShow = keys.slice(indexOfFirstTemp, indexOfLastTemp);
    const currentTemps = {};

    for (let date of tempsToShow) {
      currentTemps[date] = this.props.averages[date];
    }

    return <WeatherCard temps={currentTemps} />;
  };

  render() {
    return (
      <div>
        <Icon name='arrow circle left'></Icon>
        <Icon name='arrow circle right'></Icon>
        {this.showPerPage()}
      </div>
    );
  }
}

export default WeatherPagination;
