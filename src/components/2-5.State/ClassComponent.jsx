import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // 컴포넌트가 그려지자마자 호출
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    // 컴포넌트가 사라지기 직전에 호출
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
