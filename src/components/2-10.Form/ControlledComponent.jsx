import React, { useState } from "react";

export default function ControlledComponent() {
  const [name, setName] = useState("");
  const [easay, setEasay] = useState("Please Write an easay about you");
  const [color, setColor] = useState("Choice");
  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    alert(`name : ${name}, easay : ${easay}, Color : ${color}`);
    e.preventDefault();
  }

  function handleEasayChange(e) {
    setEasay(e.target.value);
  }

  function handleColorChange(e) {
    setColor(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Easay
        <textarea value={easay} onChange={handleEasayChange} />
      </label>
      <input type="submit" defaultValue="Submit" />
      <br />
      <br />
      <label>
        Pick Your favorite color
        <select value={color} onChange={handleColorChange}>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Pink">Pink</option>
        </select>
      </label>
    </form>
  );
}
