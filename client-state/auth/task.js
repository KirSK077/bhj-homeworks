const btn = document.querySelector('.btn');
const singnin = document.querySelector('.signin');
const signinForm = document.querySelector('#signin__form');
const url = signinForm.action;
const welcome = document.querySelector('.welcome');

// Загрузка профиля (если в локальном хранилище есть ID пользователя)
window.addEventListener('load', () => {
    if (getID()) createUserProfile(getID());
})

// Обработка отправки формы
btn.addEventListener('click', function(event) {
    event.preventDefault();
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: signinForm.login.value,
            password: signinForm.password.value,
        })
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        if (data.success) {
            createUserProfile(data.user_id);
            setID(data.user_id);
        } else {
            alert('Неверный логин/пароль');
        }
    })
    signinForm.reset();
})

// Функция записи ID пользователя в локальное хранилище
function setID(id) {
    localStorage.setItem('user_id', id);
}

// Функция получения ID пользователя из локального хранилища
function getID() {
    return localStorage.getItem('user_id');
}

// Функция создания профиля
function createUserProfile(userID) {
    const user_id = document.querySelector('#user_id');
    user_id.textContent = userID;
    singnin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    const btnExit = document.createElement('button');
    btnExit.classList.add('btn');
    btnExit.textContent = 'Выйти';
    welcome.after(btnExit);
    btnExit.addEventListener('click', () => {
        localStorage.removeItem('user_id');
        location.reload();
    });
}