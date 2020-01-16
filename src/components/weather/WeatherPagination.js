import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import WeatherCard from "./WeatherCard";
import "./css/WeatherPagination.css";

class WeatherPagination extends Component {
  constructor() {
    super();
    this.state = { currentPage: 1, tempsPerPage: 3 };
  }

  showPerPage = () => {
    const indexOfLastTemp = this.state.currentPage + this.state.tempsPerPage;

    const keys = Object.keys(this.props.averages);
    const tempsToShow = keys.slice(this.state.currentPage, indexOfLastTemp);
    const currentTemps = {};

    for (let date of tempsToShow) {
      currentTemps[date] = this.props.averages[date];
    }

    return <WeatherCard temps={currentTemps} showF={this.props.showF} />;
  };

  handleLeft = () => {
    this.setState(prevState => {
      return { currentPage: prevState.currentPage - 1 };
    });
  };

  handleRight = () => {
    this.setState(prevState => {
      return { currentPage: prevState.currentPage + 1 };
    });
  };

  showArrows = () => {
    if (this.state.currentPage === 1) {
      return (
        <div className='arrows'>
          <Icon></Icon>
          <Icon onClick={this.handleRight} name='huge arrow right'></Icon>
        </div>
      );
    } else if (this.state.currentPage === 3) {
      return (
        <div className='arrows'>
          <Icon onClick={this.handleLeft} name='huge arrow  left'></Icon>
          <Icon></Icon>
        </div>
      );
    } else {
      return (
        <div className='arrows'>
          <Icon onClick={this.handleLeft} name=' huge arrow left'></Icon>
          <Icon onClick={this.handleRight} name='huge arrow  right'></Icon>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {this.showArrows()}
        <h3 className='center'>
          Click on a card to see a bar chart of the daily temp
        </h3>
        {this.showPerPage()}
      </div>
    );
  }
}

export default WeatherPagination;
