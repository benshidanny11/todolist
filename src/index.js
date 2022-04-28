import './style/main.css';
import deleteImage from './img/delete.svg';

import {
  addTodo, deleteTodo, clearAllComplele, checkTodo, updateDescription, refreshPage,
} from './utils.js';

const myWrapper = document.getElementById('list-wrapper');
const todoInput = document.getElementById('todo-input');

document.getElementById('refresh').addEventListener('click', () => refreshPage());

todoInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    addTodo(e.target.value);
  }
});

const todos = JSON.parse(localStorage.getItem('todos'))
  ? JSON.parse(localStorage.getItem('todos'))
  : [];
todos.forEach((todo) => {
  const listItem = document.createElement('li');
  listItem.classList.add('list-item');
  const itemContent = document.createElement('input');
  const checkBox = document.createElement('input');
  const moreIcon = document.createElement('img');
  const myContentWrapper = document.createElement('div');
  myContentWrapper.classList.add('ct-wrapper');
  moreIcon.classList.add('icon-cust');
  moreIcon.setAttribute('src', `${deleteImage}`);
  moreIcon.setAttribute('width', '20');
  moreIcon.setAttribute('heigt', '20');
  moreIcon.addEventListener('click', () => {
    deleteTodo(todo.index);
  });
  checkBox.setAttribute('type', 'checkbox');
  checkBox.checked = todo.completed;
  itemContent.style.textDecoration = todo.completed ? 'line-through' : 'none';
  itemContent.classList.add('todoinput');
  itemContent.disabled = true;
  listItem.addEventListener('click', () => {
    itemContent.disabled = false;
  });
  itemContent.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      updateDescription(todo.index, e.target.value);
    }
  });
  checkBox.addEventListener('change', () => {
    const completed = checkTodo(todo.completed);
    todo.completed = completed;
    localStorage.setItem('todos', JSON.stringify(todos));
    window.location.reload();
  });
  itemContent.classList.add('p-todo-desck');
  itemContent.value = todo.description;
  myContentWrapper.appendChild(checkBox);
  myContentWrapper.appendChild(itemContent);
  listItem.appendChild(myContentWrapper);
  listItem.appendChild(moreIcon);
  myWrapper.append(listItem);
});

const listItemBottom = document.createElement('li');
listItemBottom.classList.add(...['list-item', 'item-bottom']);
const pBottom = document.createElement('p');
pBottom.classList.add('p-bottom');
pBottom.innerHTML = 'Clear all completed';
listItemBottom.appendChild(pBottom);

pBottom.addEventListener('click', clearAllComplele);

myWrapper.appendChild(listItemBottom);
