document.getElementById("add-button").addEventListener("click", addTask);

function addTask() {
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "task-item";
  li.textContent = taskText;

  // Toggle complete on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Remove button
  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-btn";
  removeBtn.textContent = "X";

  // Prevent toggle on remove
  removeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(removeBtn);
  document.getElementById("task-list").appendChild(li);
  input.value = "";
}
