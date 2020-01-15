import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import WeatherCard from "./WeatherCard";

class WeatherPagination extends Component {
  constructor() {
    super();
    this.state = { currentPage: 2, tempsPerPage: 3 };
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

  handleLeft = () => {
    if (this.state.currentPage > 1) {
      this.setState(prevState => {
        return { currentPage: prevState.currentPage - 1 };
      });
    }
  };

  handleRight = () => {
    if (this.state.currentPage < 6) {
      this.setState(prevState => {
        return { currentPage: prevState.currentPage + 1 };
      });
    }
  };

  showArrows = () => {
    if (this.state.currentPage === 1) {
      return <Icon onClick={this.handleRight} name='arrow circle right'></Icon>;
    } else if (this.state.currentPage === 5) {
      return <Icon onClick={this.handleLeft} name='arrow circle left'></Icon>;
    } else {
      return (
        <div>
          <Icon onClick={this.handleLeft} name='arrow circle left'></Icon>
          <Icon onClick={this.handleRight} name='arrow circle right'></Icon>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {this.showArrows()}
        {this.showPerPage()}
      </div>
    );
  }
}

export default WeatherPagination;
