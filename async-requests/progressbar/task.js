const form = document.getElementById('form');
const url = form.action;
const progress = document.getElementById('progress');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);

    xhr.upload.addEventListener('progress', function(event) {
        if (event.lengthComputable) {
            const percentComplete = event.loaded / event.total;
            progress.value = percentComplete;
        }
    });

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status > 200 && xhr.status < 400) {
                console.log('Файл успешно загружен');
            } else {
                console.error('Ошибка при загрузке файла. Код ошибки:', xhr.status);
            }
        }
    };
    xhr.send(formData);
});