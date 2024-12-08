

// Array to hold the to-do items
let todoItems = [];

// Function to add a new to-do item
function addTodoItem(item) {
    if (item) {
        todoItems.push(item);
        renderTodoList();
    }
}

// Function to remove a to-do item
function removeTodoItem(index) {
    todoItems.splice(index, 1);
    renderTodoList();
}

// Function to render the to-do list
function renderTodoList() {
    const todoList = document.getElementById('todoListItems');
    todoList.innerHTML = ''; // Clear the current list

    todoItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeTodoItem(index);

        listItem.appendChild(removeButton);
        todoList.appendChild(listItem);
    });
}

// Event listener for adding a new to-do item
document.getElementById('addTodoButton').addEventListener('click', () => {
    const todoInput = document.getElementById('todoInput');
    addTodoItem(todoInput.value);
    todoInput.value = ''; // Clear the input field
});