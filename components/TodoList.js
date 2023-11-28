import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, onEdit, onRemove }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button className="edit" onClick={() => onEdit(todo.id, prompt('Edit task:', todo.text))}>Edit</button>
          <button className="remove" onClick={() => onRemove(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
