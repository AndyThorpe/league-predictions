import React, { Component } from "react";
import SummaryLine from "./SummaryLine";

class Summary extends Component {
  render() {
    var summarySel = [];
    var selection = this.props.selection;
    var selectionArr = Object.values(selection);

    for (var i = 0; i < selectionArr.length; i++) {
      if (selectionArr[i].selection !== "") {
        summarySel.push([
          selectionArr[i].position,
          selectionArr[i].id,
          selectionArr[i].selection,
          selectionArr[i].color
        ]);
      }
    }

    var summaryLine = summarySel.map((info, index) => {
      return (
        <SummaryLine
          key={index}
          selection={info}
          update={this.props.update}
          remove={this.props.remove}
        />
      );
    });

    return <div className="summary">{summaryLine}</div>;
  }
}

export default Summary;