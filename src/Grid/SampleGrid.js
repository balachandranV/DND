import React, { Component } from "react";
class SampleGrid extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row align-items-start">
          <div className="col">One of three columns</div>
          <div className="col">One of three columns</div>
          <div className="col">One of three columns</div>
        </div>
        <div className="row align-items-center">
          <div className="col">One of three columns</div>
          <div className="col">One of three columns</div>
          <div className="col">One of three columns</div>
        </div>
        <div className="row align-items-end">
          <div className="col">One of three columns</div>
          <div className="col">One of three columns</div>
          <div className="col">One of three columns</div>
        </div>
      </div>
    );
  }
}

export default SampleGrid;
