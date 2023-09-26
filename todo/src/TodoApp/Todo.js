import React from "react";

export const Todo = ({ todo, setEdit }) => {
  return (
    <div>
      <span>{todo.id} </span>
      <br></br>
      <span>{todo.title}</span>
      <br></br>
      <span>{todo.description}</span>
      <button onClick={() => setEdit(todo)}> Edit</button>
    </div>
  );
};
