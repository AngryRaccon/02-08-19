import React, { Component } from "react";

class Input extends Component {
  state = {
    str: "",
    agree: true
  };

  readValue = e => {
    this.setState({ str: e.target.value });
  };

  hideElement = () => {
    this.setState({ agree: !this.state.agree });
  };

  render() {
    const { name } = this.props;
    const input = this.state.agree && (
      <input
        type="text"
        placeholder={name}
        value={this.state.value}
        onChange={this.readValue}
      />
    );
    return (
      <div>
        {input}
        <button onClick={this.hideElement}>
          {this.state.agree ? "OK" : "Change name"}
        </button>
        <p>Hello, {this.state.str == "" ? name : this.state.str}</p>
      </div>
    );
  }
}

export default Input;
