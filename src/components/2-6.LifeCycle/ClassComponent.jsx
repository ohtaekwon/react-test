import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = { date: new Date() };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");

    this.timerId = setInterval(() => this.tick(), 10000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timerId);
  }

  tick() {
    // console.log("Tick");
    this.setState({ date: new Date() });
  }
  handleClick = () => {
    alert(this.state.date);
  };
  render() {
    console.log("Render");
    return (
      <>
        <h1 onClick={this.handleClick}>2-6.LifeCycle</h1>
        <div>{this.state.date.toLocaleTimeString()}</div>
      </>
    );
  }
}
