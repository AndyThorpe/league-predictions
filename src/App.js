import React, { Component } from "react";
import "./App.css";
import back from "./assets/img/back.png";
import Confirm from "./components/Confirm.js";
import $ from "jquery";
import teamData from "./api/teams.json";
import SelectTeams from "./components/SelectTeams.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: teamData,
      selection: [
        {
          position: 1,
          id: "",
          selection: "",
          color: ""
        },
        {
          position: 2,
          id: "",
          selection: "",
          color: ""
        },
        {
          position: 3,
          id: "",
          selection: "",
          color: ""
        }
      ],
      completed: false,
      hasBeenCompleted: false
    };
  }

  checkSelections() {
    var selectedTeams = this.state.selection.slice();
    var selections = 0;

    for (var i = 0; i < selectedTeams.length; i++) {
      if (selectedTeams[i].selection !== "") {
        selections++;
      }
    }
    return selections;
  }

  showConfirm(selections) {
     if (selections === 3) {
      document.getElementById("confirm").style.opacity = 1;
      document.getElementById("confirm").style.top = "180px";
    } else {
      document.getElementById("confirm").style.opacity = 0;
      document.getElementById("confirm").style.top = "0px";
    }
  }

  componentDidUpdate() {
    var completed = this.state.completed;
    var container = document.getElementById("container");

    if (completed === true) {
      container.classList.add("disabled");
    } else {
      container.classList.remove("disabled");
    }

    var selections = this.checkSelections();
    this.showConfirm(selections);

  }

  componentWillUpdate() {
    var selections = this.checkSelections();
    this.showConfirm(selections);
  }

  goBack() {
    var stageOne = document.querySelector(".signup"),
      stageTwo = document.querySelector(".top-scorers"),
      stageThree = document.querySelector(".scorers"),
      backBtn = document.querySelector(".backBtn");

    stageOne.classList.remove("complete");
    stageTwo.classList.remove("viewing");
    stageThree.classList.remove("view");
    backBtn.classList.remove("display");
  }

  getPosition(selectedTeams) {
    for (var i = 0; i < selectedTeams.length; i++) {
      if (selectedTeams[i].selection === "") {
        var position = i;
        break;
      }
    }

    if (position === 2) {
      this.setState({ hasBeenCompleted: true });
    }

    if (this.state.hasBeenCompleted === false) {
      var footerHeight = position * 35 + 35 + "px";
      document.getElementById("footer").style.height = footerHeight;
    }

    return position;
  }

  remove(id) {
    var selectedTeams = this.state.selection.slice();
    var team = "[data-id='" + id + "']";
    var chosen = document.querySelector(team);
    chosen.parentElement.classList.remove("disabled");

    selectedTeams.map((team, index) => {
      if (team.id === id) {
        team.position = team.position;
        team.id = "";
        team.selection = "";
        team.color = "";
      }
    });

    document.getElementById("footer").style.height = "105px";
    this.setState({ completed: false });
    this.setState({ selection: selectedTeams });
  }

  removeFromSelection(id, selectedTeams) {
    var selectedId = id;
    var alreadyChosen = false;

    selectedTeams.map((team, index) => {
      if (team.id === selectedId) {
        alreadyChosen = true;
      }
    });

    return alreadyChosen;
  }

  updateSelection(id, selection, color, e) {
    var selectedTeams = this.state.selection.slice();
    var position = this.getPosition(selectedTeams);
    var selections = this.checkSelections();

    if (selections === 2) {
      this.setState({ completed: true });
    }

    console.log(selections);

    if (this.state.completed === false) {
      e.target.parentElement.classList.add("disabled");
    }

    var check = this.removeFromSelection(id, selectedTeams);
    var team = "[data-id='" + id + "']";
    var chosen = document.querySelector(team);

    if (position <= 3 && check === false) {
      selectedTeams.splice(position, 1, {
        position: position + "st",
        id: id,
        selection: selection,
        color: color
      });
    }

    if (position === 3) {
      this.setState({ completed: true });
    }

    this.setState({ selection: selectedTeams });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={back} className="backBtn" onClick={this.goBack.bind(this)} alt="back btn"/>
          <h1>Predict and WIN</h1>
        </header>

        <Confirm />

        <SelectTeams
          updateSelection={this.updateSelection.bind(this)}
          remove={this.remove.bind(this)}
          leagues={this.state.data}
          selection={this.state.selection}
        />
      </div>
    );
  }
}

export default App;