import React, { Component } from "react";

class SelectionSummary extends Component {
  change() {
    var summary = document.querySelector(".selectionSummary");
    summary.classList.remove("on");
    summary.classList.add("off");
  }

  render() {
    var places = this.props.places;

    return (
      <div className="selection-inner">
        <h2>Your Selections</h2>
        <h1>1st: {places[0].selection}</h1>
        <h2>2nd: {places[1].selection}</h2>
        <h3>3rd: {places[2].selection}</h3>
        <h3>Top Scorer: {this.props.topScorer}</h3>
        <div className="btn-cont">
          <a className="btn">Submit</a>
          <a className="btn" onClick={this.change.bind(this)}>
            Change
          </a>
        </div>
      </div>
    );
  }
}

export default SelectionSummary;