//You are developing a task management system that tracks pending tasks for the day. Create an array with five tasks. Implement the following operations without using specific method references:

//Remove the first task from the list.
//Add two new high-priority tasks to the beginning of the list.
//Replace the last task in the list with a new task.
//Log the updated task list after all operations.

let task = ["task1","task2", "task3", "task4", "task5"]
task.pop()
task.unshift("high priority1")
task.unshift("high priority2")
task[4] = "New Task"
console.log("Updated task",task)