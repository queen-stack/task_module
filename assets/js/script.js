var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {
  event.preventDefault();
  
  //listItemEl.textContent = taskNameInput = "This is a new task.";
  //var taskNameInput = document.querySelector("input[name='task-name']").value;

// create list item
var listItemEl = document.createElement("li");
listItemEl.className = "task-item";

// create div to hold task info and add to list item
var taskInfoEl = document.createElement("div");
// give it a class name
taskInfoEl.className = "task-info";
// add HTML content to div
taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

listItemEl.appendChild(taskInfoEl);

// add entire list item to list
tasksToDoEl.appendChild(listItemEl);


//One to handle the form submission, get the form values, and pass those values to another function as arguments
//One to accept the form values as arguments and use them to create the new task item's HTML
}

buttonEl.addEventListener("click", createTaskHandler);

