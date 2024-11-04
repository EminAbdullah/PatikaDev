const defaultTasks = [
    "3 Litre Su İç",
    "Ödevleri Yap",
    "En Az 3 Saat Kodlama Yap",
    "Yemek Yap",
    "50 Sayfa Kitap Oku"
  ];

function newElement() {
    const taskInput = document.getElementById("task");
    const taskValue = taskInput.value.trim();
  
    if (taskValue === "") {
      showToast("error");
      return;
    }
  
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(taskValue));
  
    const closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.innerHTML = "&times;";
    closeBtn.onclick = deleteElement;
    li.appendChild(closeBtn);
  
    li.onclick = toggleChecked;
    document.getElementById("list").appendChild(li);
  
    saveToLocalStorage(taskValue);
    taskInput.value = "";
    showToast("success");
  }
  
  function deleteElement() {
    const item = this.parentElement;
    const task = item.textContent.replace("×", "").trim();
    item.remove();
    removeFromLocalStorage(task);
    showToast("removed");
  }
  
  function toggleChecked() {
    this.classList.toggle("checked");
  }
  
  function showToast(type) {
    const toastElement = document.querySelector(`.toast.${type}`);
    $(toastElement).toast("show");
  }
  
  function saveToLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  function removeFromLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter((t) => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(task));
  
      const closeBtn = document.createElement("span");
      closeBtn.className = "close";
      closeBtn.innerHTML = "&times;";
      closeBtn.onclick = deleteElement;
      li.appendChild(closeBtn);
  
      li.onclick = toggleChecked;
      document.getElementById("list").appendChild(li);
    });
  }
  document.addEventListener("DOMContentLoaded", loadTasks);
  