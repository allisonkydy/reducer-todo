import React from 'react';

function Todo({ todo }) {
  return (
    <div
      onClick={() => toggleComplete(todo.id)}
      className={todo.completed ? "complete" : "incomplete"}
    >
      {todo.item}
    </div>
  )
}

export default Todo;
