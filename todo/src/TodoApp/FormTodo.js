import React, { useEffect, useState } from "react";

export const FormTodo = ({ setTodos, todos, edit }) => {
  console.log(edit);
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");
  useEffect(() => {
    setTitle(edit ? edit.title : "");
    setDescription(edit ? edit.description : "");
  }, [edit]);

  const handelSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      setTodos([...todos, { id: todos.length + 1, title, description }]);
    }
    setTitle("");
    setDescription("");
  };

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

          <button type="submit">Add Todo</button>
        </form>
      </div>
    </div>
  );
};
