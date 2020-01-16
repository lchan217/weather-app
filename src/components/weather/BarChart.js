import React, { Component } from "react";
import { connect } from "react-redux";
import { XYPlot, VerticalBarSeries, XAxis } from "react-vis";
import "./css/BarChart.css";

class BarChart extends Component {
  render() {
    const date = this.props.date;
    const allData = this.props.list;
    const data = [];
    const chartWidth = 500;
    let chartHeight = 100;

    for (let item of allData) {
      if (date === item.dt_txt.slice(0, 10)) {
        if (this.props.showF === true) {
          let fahrenheit = ((item.main.temp - 273.15) * 9) / 5 + 32;
          data.push({
            y: fahrenheit,
            x: item.dt_txt.slice(11, 16)
          });
        } else {
          let celcius = item.main.temp - 273.15;
          data.push({
            y: celcius,
            x: item.dt_txt.slice(11, 16)
          });
        }
      }
    }

    //indicates lowest and highest point on y-axis
    const chartDomain = [0, chartHeight];
    return (
      <div>
        <br />
        <h1 className='center'>Weather for {date}</h1>
        <div className='bar-chart'>
          <XYPlot
            xType='ordinal'
            width={chartWidth}
            height={chartHeight}
            yDomain={chartDomain}
          >
            <XAxis />
            <VerticalBarSeries data={data} />
          </XYPlot>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.list
  };
};

export default connect(mapStateToProps)(BarChart);
