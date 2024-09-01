const timer = document.getElementById('timer');
let timeHMS = new Date();
timeHMS.setHours(0,0,5);
let time = timeHMS.getHours() * 3600 + timeHMS.getMinutes() * 60 + timeHMS.getSeconds();
timer.innerText = timeHMS.toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit', second: '2-digit'});

url = 'https://file-examples.com/wp-content/storage/2017/02/file_example_CSV_5000.csv'

function countDown(time) {
    let timerId = null;
    const callback = () => {
        time -= 1;
        timer.innerText = new Date(0, 0, 0, 0, 0, time)
            .toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit', second: '2-digit'});
        if (time < 0) {
            timer.innerText = '00:00:00';
            clearInterval(timerId);
            alert('Вы победили в конкурсе!');
            location.href = url;
        }
    }
    timerId = setInterval(callback, 1000);
}


countDown(time);
