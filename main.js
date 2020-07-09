const input = document.querySelector('#todo-input')
const toDoButton = document.querySelector('#submit-btn')
const todoList = document.querySelector('#todo-list')

function handleSubmit(e) {
    e.preventDefault()
    let listItem = document.createElement('li')
    let pTag = document.createElement('p')
    pTag.innerText = input.value
    listItem.append(pTag)

    listItem.append(createDeleteButton())
    todoList.append(listItem)
    
    input.value = ''
}

function createDeleteButton() {
    let deleteButton = document.createElement('button')
    deleteButton.innerText = 'delete'
    deleteButton.addEventListener('click', deleteListItem)
    return deleteButton
}

function deleteListItem() {
    this.parentNode.remove()
}

toDoButton.addEventListener('click', handleSubmit)
