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
    console.log("add");
    e.preventDefault();
    if (title && description) {
      setTodos([...todos, { id: todos.length + 1, title, description }]);
    }
    setTitle("");
    setDescription("");
  };
  const handelEdit = (e) => {
    e.preventDefault();
    console.log(" edit");

    const index = todos.findIndex((todo) => todo.id === edit.id);
    console.log(index);
    const editTodo = [...todos];
    console.log(editTodo);
    editTodo[index] = { ...edit, title, description };
    setTodos(editTodo);
  };

  return (
    <div>
      <div className="add-todo__container">
        <form onSubmit={edit ? handelEdit : handelSubmit} className="add__todo-from">
          <div className="add-todo-item">
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="input-title"></input>
          </div>
          <div className="add-todo-item">
            <label>Desctiption</label>

            <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          {edit ? <button type="submit">save</button> : <button type="submit">Add todo</button>}
        </form>
      </div>
    </div>
  );
};
// import React, { useEffect, useState } from "react";

// export const FormTodo = ({ setTodos, todos, edit, setEdit }) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   useEffect(() => {
//     setTitle(edit ? edit.title : "");
//     setDescription(edit ? edit.description : "");
//   }, [edit]);

//   const handleAdd = (e) => {
//     e.preventDefault();
//     if (title && description) {
//       const newTodo = {
//         id: Date.now(), // Generate a unique ID
//         title,
//         description,
//       };
//       setTodos([...todos, newTodo]);
//       setTitle("");
//       setDescription("");
//     }
//   };

//   const handleEdit = (e) => {
//     console.log("ok");
//     e.preventDefault();
//     if (title && description) {
//       // Find the index of the edited todo
//       const index = todos.findIndex((todo) => todo.id === edit.id);

//       if (index !== -1) {
//         // Create a copy of the todos array
//         const updatedTodos = [...todos];

//         // Update the todo with the new values
//         updatedTodos[index] = { ...edit, title, description };

//         // Update the state with the edited todo
//         setTodos(updatedTodos);
//         setTitle("");
//         setDescription("");
//       }
//     }
//   };

//   return (
//     <div>
//       <div className="add-todo__container">
//         <form onSubmit={edit ? handleEdit : handleAdd} className="add__todo-form">
//           <div className="add-todo-item">
//             <label>Title</label>
//             <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="input-title" />
//           </div>
//           <div className="add-todo-item">
//             <label>Description</label>
//             <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
//           </div>
//           {edit ? <button type="submit">Save</button> : <button type="submit">Add Todo</button>}
//         </form>
//       </div>
//     </div>
//   );
// };
