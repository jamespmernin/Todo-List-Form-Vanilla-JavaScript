const form = document.querySelector("#todo-input");
const todoButton = document.querySelector("#submit-btn");
const todoList = document.querySelector("#todo-list");

function handleSubmit(e) {
  e.preventDefault();
  createTodoItem();
}

function createTodoItem() {
  let listItem = document.createElement("li");
  let pTag = document.createElement("p");
  // add class
  pTag.classList.add("item");

  pTag.innerText = form.value;

  listItem.appendChild(pTag);

  listItem.appendChild(createDeleteButton());
  todoList.appendChild(listItem);
}

function createDeleteButton() {
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", deleteListItem);
  return deleteButton;
}

function deleteListItem() {
  this.parentNode.remove();
}

todoButton.addEventListener("click", handleSubmit);
