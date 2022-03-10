import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <React.Fragment>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <button onClick={this.handleIncrement}>Add</button>
      </React.Fragment>
    );
  }
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement = () => {
    console.log("+ pressed", this.state.count);
  };
  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && "Please create some tags"}
        {this.renderTags()}
        <button onClick={this.handleIncrement}>Add</button>
      </React.Fragment>
    );
  }
}

export default Counter;
