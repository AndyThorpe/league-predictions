import React, { Component } from "react";

class Player extends Component {
  selection(e) {
    var oldSelection = document.querySelectorAll(".player");

    for (var i = 0; i < oldSelection.length; ++i) {
      oldSelection[i].classList.remove("disabled");
    }

    var player = e.target.getAttribute("data-player");
    this.props.updatePlayer(player);

    window.scrollTo(0, 0);
    e.target.parentElement.classList.add("disabled");

    var summary = document.querySelector(".selectionSummary");
    summary.classList.remove("off");
    summary.classList.add("on");
  }

  render() {
    var playerInfo = this.props.info;

    return (
      <div className="player">
        <p
          id="click"
          data-player={playerInfo.playerName}
          onClick={this.selection.bind(this)}
        >
          {playerInfo.playerName} - {playerInfo.goalsLastSeason}
        </p>
      </div>
    );
  }
}

export default Player;