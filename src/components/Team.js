import React, { Component } from "react";

class Team extends Component {
  selection(e) {
    var id = e.target.getAttribute("data-id");
    var team = e.target.getAttribute("data-team");
    var color = e.target.getAttribute("data-color");
    this.props.update(id, team, color, e);
  }

  render() {
    var teamInfo = this.props.teamInfo;
    var id = teamInfo.teamId;

    return (
      <div className="team">
        <div
          className="circle"
          style={{ backgroundColor: teamInfo.teamColor }}
        />
        <p
          id="click"
          data-id={id}
          data-team={teamInfo.teamName}
          data-color={teamInfo.teamColor}
          onClick={this.selection.bind(this)}
        >
          {teamInfo.teamName}
        </p>
      </div>
    );
  }
}

export default Team;