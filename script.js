document.addEventListener("DOMContentLoaded", function() {
  const addTaskButton = document.getElementById("addTask");
  const taskInput = document.getElementById("task");
  const taskList = document.getElementById("taskList");

  addTaskButton.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete">Delete</button>
      `;
      taskList.appendChild(taskItem);
      taskInput.value = "";
    }
  });

  taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
      event.target.parentNode.remove();
    }
  });
});
