import React, { useState } from 'react';

function TodoForm() {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // call dispatch fn
    setNewTodo("");
  }

  const handleClear = (e) => {
    e.preventDefault();
    // call remove fn
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="enter a todo..."
        value={newTodo}
        name="newTodo"
        onChange={handleInputChange}
      />
      <button type="submit">add</button>
      <button type="button" onClick={(e) => handleClear(e)}>clear completed</button>
    </form>
  )
}

export default TodoForm;
