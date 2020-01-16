import React, { Component } from "react";
import { connect } from "react-redux";
import { XYPlot, VerticalBarSeries, XAxis, YAxis } from "react-vis";
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
    const chartDomain = [lowest, highest];
    const degree = this.props.showF ? "°F" : "°C";
    return (
      <div>
        <br />
        <h1 className='center'>
          Weather for {date} in {degree}
        </h1>

        <XYPlot
          className='bar-graph'
          xType='ordinal'
          width={500}
          height={200}
          yDomain={chartDomain}
        >
          <XAxis />
          <YAxis />
          <VerticalBarSeries
            data={data}
            onValueMouseOver={event => {
              this.setState({
                temp: event.y,
                hour: event.x
              });
            }}
            onSeriesMouseOut={v => this.setState({ temp: null, hour: null })}
          />
          <p style={{ textAlign: "left" }}>
            {this.state.hour && this.state.temp
              ? `Temperature at ${this.state.hour}: ${this.state.temp.toFixed(
                  2
                )}`
              : null}
          </p>
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
