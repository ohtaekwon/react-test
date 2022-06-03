import React, { useState } from "react";

export default function State() {
  const initialCout = 0;
  const [count, setCount] = useState(initialCout);

  function handleCount({ children }) {
    if (children == "-") {
      setCount(() => [...count] - 1);
    } else {
      setCount(() => [...count] + 1);
    }
  }

  return (
    <div>
      Count : {count}
      <button onClick={() => setCount(initialCout)}>Reset</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
}
