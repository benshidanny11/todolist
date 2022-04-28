/* eslint-disable import/prefer-default-export */
const todos = JSON.parse(localStorage.getItem('todos')) || [];
export const addTodo = (description) => {
  const index = todos && todos.length > 0 ? todos.length + 1 : 1;
  const todo = { description, index, completed: false };
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
  window.location.reload();
};

export const deleteTodo = (index) => {
  const remainingTodos = todos.filter((todo) => todo.index !== index);
  if (remainingTodos.length > 0) {
    remainingTodos.forEach((todo, index) => {
      todo.index = index + 1;
    });
    localStorage.setItem('todos', JSON.stringify(remainingTodos));
    window.location.reload();
  } else {
    localStorage.setItem('todos', JSON.stringify(remainingTodos));
    window.location.reload();
  }
};

export const clearAllComplele = () => {
  const remainingTodos = todos.filter((todo) => !todo.completed);
  if (remainingTodos.length > 0) {
    remainingTodos.forEach((todo, index) => {
      todo.index = index + 1;
    });
    localStorage.setItem('todos', JSON.stringify(remainingTodos));
    window.location.reload();
  } else {
    localStorage.setItem('todos', JSON.stringify(remainingTodos));
    window.location.reload();
  }
};

export const updateDescription = (index, description) => {
  const todo = todos.filter((todo) => todo.index === index)[0];
  todo.description = description;
  localStorage.setItem('todos', JSON.stringify(todos));
  window.location.reload();
};

export const refreshPage = () => window.location.reload();

export const checkTodo = (completed) => !completed;