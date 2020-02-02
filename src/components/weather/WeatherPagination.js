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
    //destructure props
    const { currentPage, tempsPerPage } = this.state;
    const { averages, showF } = this.props;

    const indexOfLastTemp = currentPage + tempsPerPage;

    const keys = Object.keys(averages);
    const tempsToShow = keys.slice(currentPage, indexOfLastTemp);
    const currentTemps = {};

    for (let date of tempsToShow) {
      currentTemps[date] = averages[date];
    }

    return <WeatherCard temps={currentTemps} showF={showF} />;
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
    const { currentPage } = this.state;
    const { handleRight, handleLeft } = this;

    if (currentPage === 1) {
      return (
        <div className='arrows'>
          <Icon></Icon>
          <Icon
            onClick={handleRight}
            name='huge long arrow alternate right'
          ></Icon>
        </div>
      );
    } else if (currentPage === 3) {
      return (
        <div className='arrows'>
          <Icon
            onClick={handleLeft}
            name='huge long arrow alternate left'
          ></Icon>
          <Icon></Icon>
        </div>
      );
    } else {
      return (
        <div className='arrows'>
          <Icon
            onClick={handleLeft}
            name='huge long arrow alternate left'
          ></Icon>
          <Icon
            onClick={handleRight}
            name='huge long arrow alternate right'
          ></Icon>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {this.showArrows()}
        <h4 className='center'>
          <i>Click on a card to see a bar chart of the daily temp</i>
        </h4>
        <br />
        {this.showPerPage()}
      </div>
    );
  }
}

export default WeatherPagination;
