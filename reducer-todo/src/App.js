import React, { useReducer } from "react";
import "./App.css";

import { initialState, todoReducer } from "./reducers/todoReducer";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = newTodo => {
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };

  const toggleComplete = id => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: id });
  };

  const removeTodos = () => {
    dispatch({ type: "REMOVE_TODOS" });
  };

  return (
    <div className="App">
      <h1>a new and fancy todo app</h1>
      <TodoForm addTodo={addTodo} removeTodos={removeTodos} />
      <TodoList todos={state.todos} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
