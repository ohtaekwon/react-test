import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext.js";

class ThemedButton extends Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        onClick={props.changeTheme}
        style={{ backgroundColor: theme.background, color: theme.foreground }}
      ></button>
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
