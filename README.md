# task_module
Kanban Board
notes for ensuring you split the code:

//One to handle the form submission, get the form values, and pass those values to another function as arguments
//One to accept the form values as arguments and use them to create the new task item's HTML

Let's take a moment and outline what we'll do to refactor the code:
Rename the handler function to be a little more specific to the event it's handling.

Create a new function to take in the task's name and title as arguments and create the HTML elements that get added to the page.

Move the code that creates and adds HTML elements from the handler function into the newly created function.

Update the handler function to send the task name and type values from the form to the newly created function.