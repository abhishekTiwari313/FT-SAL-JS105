//Problem Statement: Create an array that represents your daily to-do list with 5 tasks. Add a new task to the beginning of the list. Then, remove the last task from the list. Finally, log the updated to-do list to the console.

let todo = ["Task1","Task2","Task3","Task4","Task5"]
todo.unshift("New Task");
todo.pop();
console.log("Updated Todo" , todo)