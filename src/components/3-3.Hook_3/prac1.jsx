import React from "react";
import { useState } from "react";

export default function Prac1() {
  const initialCount = 0;

  const [count, setCount] = useState(initialCount);

  return (
    <div>
      count : {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
    </div>
  );
}
