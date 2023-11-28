import React from 'react';

const TodoList = ({ todos, onEdit, onRemove }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => onEdit(todo.id, prompt('Edit task:', todo.text))}>Edit</button>
          <button onClick={() => onRemove(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
