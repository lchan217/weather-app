import React, { Component } from "react";
import { connect } from "react-redux";

class BarChart extends Component {
  render() {
    return <div>barchart</div>;
  }
}

const mapStateToProps = state => {
  return {
    list: state.list
  };
};

export default connect(mapStateToProps)(BarChart);
