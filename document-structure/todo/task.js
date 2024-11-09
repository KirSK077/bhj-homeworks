const tasksInput = document.querySelector('#task__input');
const tasksList = document.querySelector('#tasks__list');
const tasksForm = document.querySelector('#tasks__form');
const taskArray = [];

// Функция создания задачи
function addTask(task) {
    const element = document.createElement('div');
    element.classList.add('task');
    element.innerHTML = `
        <div class="task__title">${task}</div>
        <a href="#" class="task__remove">&times;</a>
    `;
    taskArray.push(task);
    tasksList.append(element);
    tasksInput.value = '';
}
// Функция удаления задачи
function removeTask(event) {
    if (event.target.classList.contains('task__remove')) {
        event.target.closest('.task').remove();
    }       
}

// Обработка события добавления задачи при нажатии на кнопку "Добавить"
tasksForm.addEventListener('submit', (event) => {
    if (tasksInput.value.trim() !== '') {
        event.preventDefault();
        addTask(tasksInput.value.trim());
        localStorage.setItem('task', JSON.stringify(taskArray));
    }
})

// Обработка события удаления
tasksList.addEventListener('click', (event) =>{
    removeTask(event);
    taskArray.splice(taskArray.indexOf(event.target.closest('.task').querySelector('.task__title').textContent), 1);
    localStorage.setItem('task', JSON.stringify(taskArray));
})


// Функция перезагрузки страницы с восстановлением задач из localStorage
function reload() {
    if (localStorage.getItem('task')) {
        JSON.parse(localStorage.getItem('task')).forEach(item => {
            addTask(item);
        })
    }
}
reload()