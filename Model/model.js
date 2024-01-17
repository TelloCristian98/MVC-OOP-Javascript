function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText.length > 0) {
    todoList.addTask(taskText);
    taskInput.value = "";
    todoList.renderTasks();
  }
}
