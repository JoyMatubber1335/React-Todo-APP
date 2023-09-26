import React, { useState } from "react";
import { Todo } from "./Todo";
import { FormTodo } from "./FormTodo";
export const TodoList = () => {
  const [edit, setEdit] = useState();
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <FormTodo setTodos={setTodos} todos={todos} edit={edit} />
      {todos.map((todo) => (
        <Todo todo={todo} setEdit={setEdit} key={todo.id} />
      ))}
    </div>
  );
};
