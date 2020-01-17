import React, { Component } from "react";
import { connect } from "react-redux";
import {
  VerticalBarSeries,
  XAxis,
  YAxis,
  FlexibleWidthXYPlot
} from "react-vis";
import "./css/BarChart.css";

class BarChart extends Component {
  constructor() {
    super();
    this.state = {
      temp: null,
      hour: null
    };
  }
  render() {
    const { date, list, showF } = this.props;
    const data = [];

    let lowest = 1000;
    let highest = -1000;

    for (let item of list) {
      if (date === item.dt_txt.slice(0, 10)) {
        if (showF === true) {
          let fahrenheit = ((item.main.temp - 273.15) * 9) / 5 + 32;
          if (lowest > fahrenheit) lowest = fahrenheit;
          if (highest < fahrenheit) highest = fahrenheit;
          data.push({
            y: fahrenheit,
            x: item.dt_txt.slice(11, 16)
          });
        } else {
          let celcius = item.main.temp - 273.15;
          if (lowest > celcius) lowest = celcius;
          if (highest < celcius) highest = celcius;
          data.push({
            y: celcius,
            x: item.dt_txt.slice(11, 16)
          });
        }
      }
    }

    //indicates lowest and highest point on y-axis
    // add or subtract 2 to widen the range
    const chartDomain = [lowest - 2, highest + 2];
    const degree = this.props.showF ? "°F" : "°C";

    const { hour, temp } = this.state;

    return (
      <div>
        <br />
        <h3 className='center'>
          Weather for {date} in {degree}
        </h3>
        <h4 className='center'>
          <i>Click on bars to see details</i>
        </h4>
        <p className='hover-data center'>
          {hour && temp
            ? `Temperature at ${hour}: ${temp.toFixed(2)} ${degree}`
            : null}
        </p>

        <div className='bar-graph-wrapper'>
          <FlexibleWidthXYPlot
            margin={{ bottom: 55 }}
            className='bar-graph'
            xType='ordinal'
            height={200}
            yDomain={chartDomain}
          >
            <XAxis tickFormat={v => `${v}`} tickLabelAngle={-90} />
            <YAxis />
            <VerticalBarSeries
              data={data}
              onValueClick={(datapoint, event) => {
                this.setState({
                  temp: datapoint.y,
                  hour: datapoint.x
                });
              }}
            />
          </FlexibleWidthXYPlot>
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
