let url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

fetch(url)
    .then(response => response.json())
    .then(json => {
        cache(json);
        showCurrency();
    })
    .catch(error => {
        console.log(console.log('Fetch Error :', error))
    });
// Функция отображения данных
function showCurrency() {
    if (!localStorage.getItem('Curency')) {
        return;
    }
    removeLoader(); 
    let data = JSON.parse(localStorage.getItem('Curency'));
    data.forEach(item => {
        let div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = `
        <div class="item__code">${item.CharCode}</div>
        <div class="item__value">${(item.Value).toFixed(2)}</div>
        <div class="item__currency">руб.</div>
        `;
        document.getElementById('items').append(div);
    });
}
// Функция скрытия анимации загрузки
function removeLoader() {
    document.getElementById('loader').classList.remove('loader_active');
}
// Функция кэширования данных
function cache(response) {
    let cachedData = Object.keys(response['response']['Valute']).map(key => response['response']['Valute'][key]);
    localStorage.setItem('Curency', JSON.stringify(cachedData));
}

