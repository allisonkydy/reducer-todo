import React, { useReducer } from 'react';
import './App.css';

import { initialState, todoReducer } from './reducers/todoReducer';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const toggleComplete = () => {
    return;
  }

  return (
    <div className="App">
      <h1>a new and fancy todo app</h1>
      <TodoForm />
      <TodoList todos={state.todos} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
