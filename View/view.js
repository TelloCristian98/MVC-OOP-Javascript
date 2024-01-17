const todoList = new TodoList();

document.getElementById("addButton").addEventListener("click", addTask);
document.getElementById("taskInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  todoList.loadTasksFromLocalStorage();
});