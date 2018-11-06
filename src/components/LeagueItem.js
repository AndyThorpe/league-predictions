import React, { Component } from "react";
import Team from "./Team";

class LeagueItem extends Component {
  render() {
    var data = this.props.league;
    var leagueName = data.leagueName;
    var teams = data.teams;
    var teamLine = teams.map((table, index) => {
      return <Team key={index} teamInfo={table} update={this.props.update} />;
    });

    return (
      <div id="container" className="teams">
        <h1>
          <strong>{leagueName}</strong>
        </h1>
        {teamLine}
      </div>
    );
  }
}

export default LeagueItem;