import React, { Component } from "react";
import Close from "../assets/close.png";

class SummaryLine extends Component {
  selection(e) {
    var id = "";
    var selection = "";
    var color = "";

    this.props.update(id, selection, color);
  }

  remove(e) {
    var id = e.target.getAttribute("data-id");
    this.props.remove(id);
  }

  ordinal_suffix_of(i) {
    var j = i % 10,
      k = i % 100;
    if (j === 1 && k !== 11) {
      return i + "st";
    }
    if (j === 2 && k !== 12) {
      return i + "nd";
    }
    if (j === 3 && k !== 13) {
      return i + "rd";
    }
    return i + "th";
  }

  render() {
    var id = this.props.selection[1];
    var selection = this.props.selection[2];
    var teamColor = this.props.selection[3];
    var pos = this.props.selection[0];

    var p = parseInt(pos) + 1;

    var position = this.ordinal_suffix_of(p);

    return (
      <div className="summaryline">
        <div className="circle" style={{ backgroundColor: teamColor }} />
        <p
          id="click"
          data-id={id}
          data-team={selection}
          onClick={this.selection.bind(this)}
        >
          {position} {selection}
        </p>
        <img
          src={Close}
          className="remove"
          data-id={id}
          onClick={this.remove.bind(this)}
          alt="delete"
        />
      </div>
    );
  }
}

export default SummaryLine;