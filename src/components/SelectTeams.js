import React, { Component } from "react";
import LeagueItem from "./LeagueItem";
import Summary from "./Summary.js";
import TopScorers from "./TopScorers.js";

class SelectTeams extends Component {
  update(id, selection, color, e) {
    this.props.updateSelection(id, selection, color, e);
  }

  updatePlayer(id, player) {
    this.props.updatePlayer(id, player);
  }

  render() {
    var data = this.props.leagues;
    var leagues = data.leagues;
    var league = leagues.map((info, index) => {
      return <LeagueItem key={index} league={info} update={this.update.bind(this)} />;
    });

    return (
      <div>
        <div className="signup">
          <div className="flag-links" />
          <div className="container">{league}</div>
          <footer id="footer">
            <Summary
              selection={this.props.selection}
              update={this.update.bind(this)}
              remove={this.props.remove}
            />
          </footer>
        </div>
        <div className="top-scorers">
          <h2>Top Scorers</h2>
          <p> Name - (goals last season)</p>
          <TopScorers
            data={this.props.leagues}
            selections={this.props.selection}
          />
        </div>
      </div>
    );
  }
}

export default SelectTeams;