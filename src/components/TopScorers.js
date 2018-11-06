import React, { Component } from "react";
import Player from "./Player";
import SelectionSummary from "./SelectionSummary";

class TopScorers extends Component {
  constructor() {
    super();
    this.state = {
      topScorer: ""
    };
  }

  compare(a, b) {
    if (a.goalsLastSeason > b.goalsLastSeason) return -1;
    if (a.goalsLastSeason < b.goalsLastSeason) return 1;
    return 0;
  }

  updatePlayer(player) {
    var selectedPlayer = this.state.topScorer;
    selectedPlayer = player;
    this.setState({ topScorer: selectedPlayer });
  }

  render() {
    var data = this.props.data;
    var leagues = data.leagues;
    var teams = leagues[0].teams;
    var players = [];
    var player = [];

    teams.map((info, index) => {
      info.topPlayers.map((player, index) => {
        players.push(player);
      });
    });

    players.sort(this.compare);

    player = players.map((player, index) => {
      return (
        <Player key={index} info={player} updatePlayer={this.updatePlayer.bind(this)} />
      );
    });

    return (
      <div>
        <div className="selectionSummary" id="summary">
          <SelectionSummary
            topScorer={this.state.topScorer}
            places={this.props.selections}
          />
        </div>
        <div className="scorers">{player}</div>
      </div>
    );
  }
}

export default TopScorers;