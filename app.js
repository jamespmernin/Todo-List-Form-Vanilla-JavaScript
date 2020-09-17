const input = document.querySelector('#todo-input');
const button = document.querySelector('#todo-button');
const ul = document.querySelector('#todo-ul');
const todoItems = [];
function handleSubmit(e) {
  e.preventDefault();
  let listItem = document.createElement('li');
  listItem.innerHTML = input.value;
  ul.appendChild(listItem);
  listItem.appendChild(createDeleteButton());
  input.value = '';
}

function createDeleteButton() {
  let deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'Delete';
  deleteButton.addEventListener('click', handleDelete);
  return deleteButton;
}

function handleDelete() {
  this.parentNode.remove();
}

button.addEventListener('click', handleSubmit)