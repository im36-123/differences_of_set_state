import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleClickFunction}>Function Count up</button>
        <button onClick={this.handleClickObject}>Object Count up</button>
      </div>
    );
  }

  handleClickFunction = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };

  handleClickObject = () => {
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
