// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
var $warningEmptyTask = $('<span>Add a task</span>').add($('<button class="btn-flat toast-action">Undo</button>'));


// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // add task event
  form.addEventListener('submit', addTask);
}

// Add Task
function addTask(e) {
  if(taskInput.value === ''){
    Materialize.toast($warningEmptyTask, 1000);
  }

  // Create li element
  const li = document.createElement('li');
  // Add Class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value))
  // Create new link element
  const link = document.createElement('a')
  // Add class
  link.className = 'delete-item secondary-content'
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>'
  // Append the link to li
  li.appendChild(link)

  // Append li to ul
  taskList.appendChild(li)

  // clear input
  taskInput.value = '';


  e.preventDefault();
}