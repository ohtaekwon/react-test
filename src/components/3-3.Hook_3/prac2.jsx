import React from "react";
import { useReducer } from "react";

export default function Prac2() {
  const initialCount = { count: 0 };
  // state, action
  function reducer(state, action) {
    switch (action.type) {
      case "reset":
        return initialCount;
      case "increse":
        return { count: state.count + 1 };
      case "decrease":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initialCount);

  return (
    <div>
      Reducx Count : {state.count}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increse" })}>+</button>
      <button onClick={() => dispatch({ type: "decrease" })}>-</button>
    </div>
  );
}
