import React from "react";

export default function List() {
  // const numbers = [1, 2, 3, 4, 5];
  // return (
  //   <ul>
  //     {numbers.map((item) => (
  //       <li key={item.toString()}>{item}</li>
  //     ))}
  //   </ul>
  // );
  const todos = [
    {
      id: 1,
      text: "Running",
    },
    {
      id: 2,
      text: "TypeScript Study",
    },
    {
      id: 3,
      text: "JavaScript Study",
    },
    {
      id: 4,
      text: "React Study",
    },
  ];

  const Items = (props) => {
    return <li>{props.text}</li>;
  };

  const todoList = todos.map((todo) => <Items key={todo.id} {...todo} />);

  return <>{todoList}</>;
}
