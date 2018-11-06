import React, { Component } from "react";

class Confirm extends Component {
  confirm(e) {
    var stageOne = document.querySelector(".signup"),
      stageTwo = document.querySelector(".top-scorers"),
      stageThree = document.querySelector(".scorers"),
      backBtn = document.querySelector(".backBtn");

    console.log(backBtn);

    stageOne.classList.add("complete");
    stageTwo.classList.add("viewing");
    stageThree.classList.add("view");
    backBtn.classList.add("display");

    document.getElementById("confirm").style.opacity = 0;
    document.getElementById("confirm").style.top = "0px";
  }

  render() {
    return (
      <div id="confirm" className="confirm">
        <a className="btn" onClick={this.confirm.bind(this)}>
          Confirm
        </a>
      </div>
    );
  }
}

export default Confirm;