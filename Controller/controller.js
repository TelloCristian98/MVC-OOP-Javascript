class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(TaskText) {
    const task = {
      text: TaskText,
    };
    this.tasks.push(task);
    this.saveTasksLocalStorage();
    this.renderTasks();
  }

  editTask(index, newText) {
    this.tasks[index].text = newText;
    this.saveTasksLocalStorage();
    this.renderTasks();
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
    this.saveTasksLocalStorage();
    this.renderTasks();
  }

  saveTasksLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      this.tasks = tasks;
      this.renderTasks();
    }
  }

  renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    this.tasks.forEach((task, index) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
            <span>${task.text}</span>
            <span>
                <button class="edit-button" onClick="todoList.editTask(${index}, prompt('Edit task:', '${task.text}'))">Edit</button>
                <button class="delete-button" onClick="todoList.deleteTask(${index})">Delete</button>
            </span>
        `;
      taskList.appendChild(listItem);
    });
  }
}
