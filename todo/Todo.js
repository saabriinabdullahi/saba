[10:01 am, 20/10/2023] 🖤: const fs = require('fs');
const readline = require('readline');
const { addTask, updateTask, deleteTask } = require('./Todo');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to display the current Todo List
function displayTodoList() {
  const todoList = loadTodoList();
  console.log('Todo List:');
  todoList.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
  console.log('');
}

// Function to prompt the user for a new task
function promptAddTask() {
  rl.question('Enter a new task: ', (task) => {
    addTask(task);
    console.log('Task added successfully.\n');
    displayTodoList();
    promptMainMenu();
  });
}

// Function to prompt the user to update a task
function pro…
[10:01 am, 20/10/2023] 🖤: const fs = require('fs');

// Function to load the Todo List from the data file
function loadTodoList() {
  try {
    const data = fs.readFileSync('todo.txt', 'utf8');
    return JSON.parse(data);
  } catch (err) {
    // If the data file doesn't exist, return an empty array
    if (err.code === 'ENOENT') {
      return [];
    }
    throw err;
  }
}

// Function to save the Todo List to the data file
function saveTodoList(todoList) {
  fs.writeFileSync('todo.txt', JSON.stringify(todoList));
}

// Function to add a task to the Todo List
function addTask(task) {
  const todoList = loadTodoList();
  todoList.push(task);
  saveTodoList(todoList);
}

// Function to update a task in the Todo List
function updateTask(taskIndex, newTask) {
  const todoList = loadTodoList();
  if (taskIndex >= 0 && taskIndex < todoList.length) {
    todoList[taskIndex] = newTask;
    saveTodoList(todoList);
  } else {
    throw new Error('Invalid task index');
  }
}

// Function to delete a task from the Todo List
function deleteTask(taskIndex) {
  const todoList = loadTodoList();
  if (taskIndex >= 0 && taskIndex < todoList.length) {
    todoList.splice(taskIndex, 1);
    saveTodoList(todoList);
  } else {
    throw new Error('Invalid task index');
  }
}

// Export the functions
module.exports = {
  addTask,
  updateTask,
  deleteTask,
};


// ...

// Function to add a task to the Todo List
function addTask(task) {
  const todoList = loadTodoList();
  todoList.push(task);
  saveTodoList(todoList);
}

// Function to update a task in the Todo List
function updateTask(taskIndex, newTask) {
  const todoList = loadTodoList();
  if (taskIndex >= 0 && taskIndex < todoList.length) {
    todoList[taskIndex] = newTask;
    saveTodoList(todoList);
  } else {
    throw new Error('Invalid task index');
  }
}

// Function to delete a task from the Todo List
function deleteTask(taskIndex) {
  const todoList = loadTodoList();
  if (taskIndex >= 0 && taskIndex < todoList.length) {
    todoList.splice(taskIndex, 1);
    saveTodoList(todoList);
  } else {
    throw new Error('Invalid task index');
  }
}


function loadTodoList() {
    try {
      const data = fs.readFileSync('todo.txt', 'utf8');
      return JSON.parse(data);
    } catch (err) {
      // If the data file doesn't exist, return an empty array
      if (err.code === 'ENOENT') {
        return [];
      }
      throw err;
    }
  }
  
  // Function to save the Todo List to the data file
  function saveTodoList(todoList) {
    fs.writeFileSync('todo.txt', JSON.stringify(todoList));
  }
  
// ...
