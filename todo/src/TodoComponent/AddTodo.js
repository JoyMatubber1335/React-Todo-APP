import React from "react";
import { useState, useReducer } from "react";

import "./AddTodo.css";
import { TodoList } from "./TodoList";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  DELETE_TODO: "delete-todo",
  COMPLETE_TODO: "complete-todo",
  EDIT_TODO: "edit-todo",
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.title, action.payload.description, action.payload.createTime)];
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => {
        return todo.id !== action.payload.id;
      });

    case ACTIONS.COMPLETE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.EDIT_TODO:

    default:
      return todos;
  }
};

function newTodo(title, description, createTime) {
  return { id: Date.now(), title: title, description: description, createTime: createTime, complete: false };
}

export const AddTodo = () => {
  const [todos, dispatch] = useReducer(reducer, []);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createTime, setCreateTime] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { title: title, description: description, createTime: createTime } });
    setTitle("");
    setCreateTime("");
    setDescription("");
  };
  console.log(todos);
  return (
    <div>
      <div className="add-todo__container">
        <form onSubmit={handelSubmit} className="add__todo-from">
          <div className="add-todo-item">
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="input-title"></input>
          </div>
          <div className="add-todo-item">
            <label>Desctiption</label>

            <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <div className="add-todo-item">
            <label>Create Time</label>
            <input
              type="date"
              value={createTime}
              onChange={(e) => setCreateTime(e.target.value)}
              className="input-date"
            ></input>
          </div>
          <button type="submit">Add Todo</button>
        </form>
        {/* <div>
          <button>Todo List</button>
          <button>Complete</button>
        </div> */}

        {todos.map((todo) => {
          return <TodoList key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
      </div>
    </div>
  );
};
