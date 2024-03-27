// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
function liAdder(item, target) {
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `todo- ${item.id}`;
  checkbox.checked = item.completed;
  checkbox.addEventListener('change', () => {
    todoList.find((todo) => todo.id === item.id).completed = checkbox.checked;
    console.log(todoList);});
  li.appendChild(checkbox);

  const label = document.createElement('label');
  label.htmlFor = `todo- ${item.id}`;
  label.textContent = item.task;
  li.appendChild(label);

  const deletebutton = document.createElement('button');
  deletebutton.textContent = 'Delete';
  deletebutton.addEventListener('click', () => {
    todoList.splice(todoList.findIndex((todo) => todo.id === item.id), 1);
    target.removeChild(li);
    console.log(todoList);
  });
  li.appendChild(deletebutton);

  target.appendChild(li);

}

// Define target ul
const target = document.querySelector('ul');
// Add all from todolist
todoList.forEach((item) => {
  liAdder(item, target);
});

// Adder button & popup button functionality
document.querySelector('.add-btn').addEventListener('click', () => {
  document.querySelector('dialog').showModal();
});

document.querySelector('form button').addEventListener('click', (event) => {
  event.preventDefault();
  const text = document.querySelector('form input').value;
  if (text === '') return;
  const id = todoList.length + 1;

  const task = {
    id: id,
    task: text,
    completed: false,
  }

  todoList.push(task);
  liAdder(task, target);

  document.querySelector('dialog').close();
});