// --- Estado ---
let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
let streak = parseInt(localStorage.getItem("streak") || "0", 10);
let lastCompletedDate = localStorage.getItem("lastCompletedDate") || null;

const taskNameInput = document.getElementById("task-name");
const taskLevelSelect = document.getElementById("task-level");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const streakCount = document.getElementById("streak-count");
const finishBtn = document.getElementById("finish-btn");

const LEVEL_LABELS = {
  1: "Muito difícil",
  2: "Difícil",
  3: "Neutro",
  4: "Estimulante",
  5: "Recompensa"
};

function saveState() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("streak", String(streak));
  if (lastCompletedDate) {
    localStorage.setItem("lastCompletedDate", lastCompletedDate);
  }
}

function render() {
  // Ordena da tarefa mais difícil (nível 1) para a mais estimulante (nível 5)
  const sorted = [...tasks].sort((a, b) => a.level - b.level);

  taskList.innerHTML = "";
  sorted.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task.name}</span>
      <span class="level-tag">${LEVEL_LABELS[task.level]}</span>
    `;
    taskList.appendChild(li);
  });

  streakCount.textContent = streak;
}

function addTask() {
  const name = taskNameInput.value.trim();
  const level = parseInt(taskLevelSelect.value, 10);

  if (!name) return;

  tasks.push({ name, level });
  taskNameInput.value = "";
  saveState();
  render();
}

function finishDay() {
  if (tasks.length === 0) return;

  const today = new Date().toDateString();

  // Evita contar o streak duas vezes no mesmo dia
  if (lastCompletedDate !== today) {
    streak += 1;
    lastCompletedDate = today;
  }

  tasks = [];
  saveState();
  render();
}

addBtn.addEventListener("click", addTask);
taskNameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});
finishBtn.addEventListener("click", finishDay);

render();