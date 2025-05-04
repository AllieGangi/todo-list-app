const addButton = document.getElementById('add-btn');
const inputField = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Add a new task
addButton.addEventListener('click', () => {
  const taskText = inputField.value.trim();
  if (taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    // Add a "completed" toggle
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    // Add a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent triggering click event on the li
      li.remove();
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    // Clear input field
    inputField.value = '';
  }
});

