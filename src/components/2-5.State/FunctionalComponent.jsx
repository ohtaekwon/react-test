import React, { useEffect, useState } from "react";

export default function FunctionalComponent() {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  // mount 되자마자 : componentDidMount
  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);

    return () => {
      // componentWillUnmount
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
