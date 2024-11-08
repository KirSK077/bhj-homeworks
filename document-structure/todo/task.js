const tasksInput = document.querySelector('#task__input');
const tasksList = document.querySelector('#tasks__list');
const tasksForm = document.querySelector('#tasks__form');
const taskRemove = document.querySelectorAll('.task__remove');

// Функция создания задачи
function addTask() {
    const task = document.createElement('div');
    task.classList.add('task');
    
    task.innerHTML = `
        <div class="task__title">${tasksInput.value}</div>
        <a href="#" class="task__remove">&times;</a>
    `;
    localStorage.setItem(tasksInput.value, tasksInput.value);
    tasksList.append(task);
    
    tasksInput.value = '';
}
// Функция удаления задачи
function removeTask(event) {
    if (event.target.classList.contains('task__remove')) {
        event.target.closest('.task').remove();
        localStorage.removeItem(event.target.closest('.task').querySelector('.task__title').textContent);
    }
}

// Обработка события добавления задачи при нажатии на кнопку "Добавить"
tasksForm.addEventListener('submit', (event) => {
    if (tasksInput.value !== '') {
        event.preventDefault();
        addTask();
    }
})
// Обработка события добавления задачи при нажатии на клавишу "Enter"
tasksInput.addEventListener('keydown' , (event) => {
    if (event.key === 'Enter' && tasksInput.value !== '') {
        event.preventDefault();
        addTask();
    }
})
// Обработка события удаления
tasksList.addEventListener('click', removeTask)


// Функция перезагрузки страницы с восстановлением задач из localStorage
function reload() {
    for (let i = 0; i < localStorage.length; i++) {
        const task = document.createElement('div');
        task.classList.add('task');
        
        task.innerHTML = `
            <div class="task__title">${localStorage.getItem(localStorage.key(i))}</div>
            <a href="#" class="task__remove">&times;</a>
        `;
        tasksList.append(task);
    }
}
reload()