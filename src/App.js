import React, { Component } from "react";
import math from "mathjs";
import AddName from "./AddName";
import RandomButton from "./RandomButton";
import Title from "./Title";
import ShowNames from "./ShowNames";

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: ["gordon", "sahil", "david", "sally", "jane", "alice"],
      luckyWinnerIndex: null
    };
  }

  render() {
    return (
      <div>
        <Title />
        <AddName addName={() => this.addName()} />

        <hr />
        <RandomButton handleClick={() => this.handleClick()} />

        <h3>{this.state.names[this.state.luckyWinnerIndex]}</h3>

        <ShowNames
          names={this.state.names}
          luckyWinnerIndex={this.state.luckyWinnerIndex}
        />
      </div>
    );
  }

  addName() {
    const newName = document.querySelector("input").value;
    this.setState({ names: [...this.state.names, newName] });
  }
  handleClick() {
    const randNumber = math.randomInt(this.state.names.length);

    this.setState({ luckyWinnerIndex: randNumber });
  }
}

export default App;
