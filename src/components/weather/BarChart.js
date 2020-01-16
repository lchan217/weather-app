import React, { Component } from "react";
import { connect } from "react-redux";
import { XYPlot, VerticalBarSeries, XAxis } from "react-vis";
import "./css/BarChart.css";

class BarChart extends Component {
  render() {
    const { date, list } = this.props;
    const data = [];

    for (let item of list) {
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
    const chartDomain = [0, 50];
    return (
      <div>
        <br />
        <h1 className='center'>Weather for {date}</h1>

        <XYPlot
          className='bar-graph'
          xType='ordinal'
          width={500}
          height={200}
          yDomain={chartDomain}
        >
          <XAxis />
          <VerticalBarSeries data={data} />
        </XYPlot>
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
