import './style/main.css';
import moreImage from './img/more.svg';

const todos = [
  { description: 'Do workouts', isComplet: false, index: 1 },
  { description: 'Go to shop', isComplet: false, index: 2 },
  { description: 'Do bath', isComplet: false, index: 3 },
  { description: 'Read book', isComplet: false, index: 3 },
];

const myWrapper = document.getElementById('list-wrapper');

todos.forEach((todo) => {
  const listItem = document.createElement('li');
  listItem.classList.add('list-item');
  const itemContent = document.createElement('p');
  const checkBox = document.createElement('input');
  const moreIcon = document.createElement('img');
  const myContentWrapper = document.createElement('div');
  myContentWrapper.classList.add('ct-wrapper');
  moreIcon.classList.add('icon-cust');
  moreIcon.setAttribute('src', `${moreImage}`);
  moreIcon.setAttribute('width', '6');
  moreIcon.setAttribute('heigt', '10');
  checkBox.setAttribute('type', 'checkbox');
  itemContent.classList.add('p-todo-desck');
  itemContent.innerHTML = todo.description;
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

myWrapper.appendChild(listItemBottom);
