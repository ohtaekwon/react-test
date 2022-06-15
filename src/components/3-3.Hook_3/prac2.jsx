import React, { useReducer, useState } from "react";

export default function prac2() {
  const initialCount = { count: 0 };
  // redecer은 함수
  function reducer(state, action) {
    switch (action.type) {
      case "reset":
        return { count: initialCount.count };
      case "increase":
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
      Count : {count}
      <button
        onClick={() => {
          dispatch(initialCount);
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch();
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch((prev) => prev + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
