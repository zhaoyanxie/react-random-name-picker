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
      luckyWinnerIndex: null,
      value: ""
    };
  }

  render() {
    return (
      <div>
        <Title />
        <AddName 
          onSubmit={event => this.handleSubmit(event)}
          value={this.state.value}
          handleChange={event => this.handleChange(event)} />

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

  handleChange(event) { // for keystrokes in input box
    this.setState({ value: event.target.value });
  }
  handleClick() { // to get random winner by clicking "get lucky winner" button
    const randNumber = math.randomInt(this.state.names.length);
    this.setState({ luckyWinnerIndex: randNumber });
  }
  handleSubmit(event) {
    this.setState({ names: [...this.state.names, this.state.value] });
    this.setState({value: ""});
    event.preventDefault(); // without this name cannot be added
  }
}

export default App;
