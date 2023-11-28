import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoList todos={todos} onEdit={editTodo} onRemove={removeTodo} />
      <button onClick={() => addTodo(prompt('Enter a new task:'))}>Add Todo</button>
    </div>
  );
}

export default App;
