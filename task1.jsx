import React, { useState } from "react";

export default function Input() {
  const [name, setName] = useState("");
  const [state, setState] = useState([]);
  const [index, setEditIndex] = useState(null);

  function addText(e) {
    setName(e.target.value);
  }

  function addTodo() {
    if (!name.trim()) return; // Prevent adding empty todos

    if (index !== null) {
      const updatedState = state.map((el, i) => (i === index ? name : el));
      setState(updatedState);
      setEditIndex(null);
    } else {
      setState([...state, name]);
    }
    setName("");
  }

  function deleteTodo(i) {
    const updatedState = state.filter((_, idx) => idx !== i);
    setState(updatedState);
  }

  function editTodo(i) {
    setName(state[i]);
    setEditIndex(i);
  }

  return (
    <div>
      <h1>Todo App</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo();
        }}
      >
        <input
          type="text"
          placeholder="Enter name"
          onChange={addText}
          value={name}
        />
        <button type="submit">
          {index !== null ? "Edit" : "Add"}
        </button>
      </form>
      <ul>
        {state.map((el, i) => (
          <li key={i}>
            {el}
            <button onClick={() => editTodo(i)}>Edit</button>
            <button onClick={() => deleteTodo(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
