let url = 'https://students.netoservices.ru/nestjs-backend/poll';

const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

// Функция получения и обрабоки запроса
function poll() {
    let pollResult = ''; // строка для хранения информации о голосах
    fetch(url)
        .then(response => response.json())
        .then(data => { 
            pollTitle.textContent = data.data.title;
            const answers = data.data.answers.map(answer => {
                const button = document.createElement('button');
                button.classList.add('poll__answer');
                button.textContent = answer;
                button.addEventListener('click', () => {
                    alert('Спасибо, ваш голос засчитан!');
                    pollResult = `vote=${data.id}&answer=${data.data.answers.indexOf(answer)}`;
                    sendPollResult(pollResult);
                });
                return button;
            });
            pollAnswers.replaceChildren(...answers);
        })
        .catch(error => console.error('Ошибка получения запроса:', error));
    return pollResult;
}

poll();
// Функция отправки запроса с голосом
function sendPollResult(pollResult) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: pollResult,
    })
        .then(response => response.json())
        .then(data => showStatistic(data))
        .catch(error => console.error('Ошибка отправки запроса:', error));
}
// Функция отображения статистики по результатам голосования
function showStatistic(data) {
    console.log(data);
    let summary = data.stat.reduce((acc, el) => el.votes + acc, 0);
    const statPercent = data.stat.map(el => el.votes / summary * 100);
    const stat = data.stat.map((el, index) => {
        const item = document.createElement('div');
        item.classList.add('poll__statistic-item');
        item.innerHTML = `
            <div>
            <p style="display: inline">${el.answer}: <span style="font-weight: bold">${statPercent[index].toFixed(2)}%</span></p>
            </div>
        `;
        return item;
    });
    const statistic = document.createElement('div');
    statistic.classList.add('poll__statistic');
    statistic.append(...stat);
    pollAnswers.replaceChildren(statistic);
}