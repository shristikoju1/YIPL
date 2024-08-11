//calendar
const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); 
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { 
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { 
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; 
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => { 
    icon.addEventListener("click", () => { 
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { 
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); 
            currMonth = date.getMonth(); 
        } else {
            date = new Date(); 
        }
        renderCalendar();
    });
});


//todo-container
const taskInput = document.getElementById('taskInput');
const newTaskBtn = document.getElementById('newTask');
const taskList = document.getElementById('tasks');
const progressBar = document.getElementById('progress');
const progressText = document.getElementById('numbers');

let tasks = [];

const addTask = () => {
  const text = taskInput.value.trim();

  if (text) {
    tasks.push({ text: text, completed: false });
    taskInput.value = '';
    updateTaskList();
    updateProgress();
  }
};

const updateTaskList = () => {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');

    listItem.innerHTML = `
      <div class='taskItem'>
        <div class="task ${task.completed ? 'completed' : ''}">
          <input type='checkbox' class='checkbox' ${task.completed ? "checked" : ''}>
          <p>${task.text}</p>
        </div>
        <div class='icons'>
          <i class='delete fas fa-trash' onClick='deleteTask(${index})'></i>
          <i class='edit fas fa-pencil-alt' onClick='editTask(${index})'></i>
        </div>
      </div>
    `;

    listItem.querySelector('.checkbox').addEventListener('change', () => {
      toggleTaskComplete(index);
    });

    taskList.append(listItem);
  });
};

const toggleTaskComplete = (index) => {
  tasks[index].completed = !tasks[index].completed;
  updateTaskList();
  updateProgress();
};

const deleteTask = (index) => {
  tasks.splice(index, 1);
  updateTaskList();
  updateProgress();
};

const updateProgress = () => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const progressPercentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  progressBar.style.width = `${progressPercentage}%`;
  progressText.textContent = `${completedTasks} / ${totalTasks}`;
};

newTaskBtn.addEventListener('click', function (e) {
  e.preventDefault();
  addTask();
});
