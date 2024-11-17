const text = document.getElementById('editor');

// Функция сохранения в локальное хранилище
text.addEventListener('input', () => {
    localStorage.setItem('text', text.value);
})

// Функция загрузки из локального хранилища
function getText() {
    const savedText = localStorage.getItem('text');
    if (savedText) {
        text.value = savedText;
    }
}
getText();
// Функция очистки содержимого
function clearTextArea() {
    const clearButton = document.createElement('button');
    
    clearButton.textContent = 'Очистить содержимое';
    clearButton.addEventListener('click', () => {
        text.value = '';
        localStorage.removeItem('text');  
    });
    text.parentNode.append(clearButton);
}
clearTextArea();