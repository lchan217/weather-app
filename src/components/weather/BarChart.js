import React, { Component } from "react";
import { connect } from "react-redux";
import { XYPlot, VerticalBarSeries } from "react-vis";

class BarChart extends Component {
  render() {
    const date = this.props.date;
    const allData = this.props.list;
    const data = [];

    for (let item of allData) {
      if (date === item.dt_txt.slice(0, 10)) {
        if (this.props.showF === true) {
          data.push({
            y: ((item.main.temp - 273.15) * 9) / 5 + 32,
            x: item.dt_txt.slice(11, 19)
          });
        } else {
          data.push({
            y: item.main.temp - 273.15,
            x: item.dt_txt.slice(11, 19)
          });
        }
      }
    }

    const chartWidth = 500;
    const chartHeight = 100;
    //indicates lowest and highest point on y-axis
    const chartDomain = [0, chartHeight];

    return (
      <div>
        barchart
        <XYPlot
          xType='ordinal'
          width={chartWidth}
          height={chartHeight}
          yDomain={chartDomain}
        >
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
