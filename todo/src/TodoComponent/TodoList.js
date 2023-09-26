import React from "react";

import "./TodoList.css";
import { ACTIONS } from "./AddTodo";

export const TodoList = ({ todo, dispatch }) => {
  return (
    <div>
      <h1>TODO LIST :</h1>
      <table className="todo-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Delete</th>
            <th>Edit</th>
            <th>Complete</th>
          </tr>
        </thead>

        <tbody>
          <tr style={{ color: todo.complete ? "#AAA" : "#000" }}>
            <td>{todo.title}</td>
            <td>{todo.description}</td>
            <td>{todo.createTime}</td>
            <td>
              <button
                className="delete-button"
                onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}
              >
                Delete
              </button>
            </td>
            <td>
              <button
                className="edit-button"
                onClick={() => dispatch({ type: ACTIONS.EDIT_TODO, payload: { id: todo.id } })}
              >
                Edit
              </button>
            </td>
            <td>
              <button
                className="complete-button"
                onClick={() => dispatch({ type: ACTIONS.COMPLETE_TODO, payload: { id: todo.id } })}
              >
                Complete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
