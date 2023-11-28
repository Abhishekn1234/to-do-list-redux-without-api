// actions.js
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const EDIT_TODO_SUCCESS = 'EDIT_TODO_SUCCESS';
export const REMOVE_TODO_SUCCESS = 'REMOVE_TODO_SUCCESS';

export const fetchTodosSuccess = (todos) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos,
});

export const addTodoSuccess = (todo) => ({
  type: ADD_TODO_SUCCESS,
  payload: todo,
});

export const editTodoSuccess = (todo) => ({
  type: EDIT_TODO_SUCCESS,
  payload: todo,
});

export const removeTodoSuccess = (id) => ({
  type: REMOVE_TODO_SUCCESS,
  payload: id,
});

export const fetchTodos = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:5000/TodoList');
    const data = await response.json();
    dispatch(fetchTodosSuccess(data));
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};

export const addTodo = (text) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:5000/TodoList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    dispatch(addTodoSuccess(data));
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};

export const editTodo = (id, text) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:5000/TodoList/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    dispatch(editTodoSuccess(data));
  } catch (error) {
    console.error('Error editing todo:', error);
  }
};

export const removeTodo = (id) => async (dispatch) => {
  try {
    await fetch(`http://localhost:5000/TodoList/${id}`, {
      method: 'DELETE',
    });
    dispatch(removeTodoSuccess(id));
  } catch (error) {
    console.error('Error removing todo:', error);
  }
};
