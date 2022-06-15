import React, { useReducer, useState } from "react";

export default function Reducer() {
  const initialState = { count: 0, name: "tk" };

  function reducer(state, action) {
    switch (action.type) {
      case "reset":
        return initialState;
      case "increament":
        return { count: state.count + 1, name: "jimiy" };
      case "decrement":
        return { count: state.count - 1, name: "son" };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count (Reducer) : {state.count}
      <br />
      name : {state.name}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increament" })}>+</button>
    </div>
  );
}
