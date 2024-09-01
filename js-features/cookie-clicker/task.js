const clicker = document.getElementsByClassName('clicker__cookie')[0];
const clickerCounter = document.getElementById('clicker__counter');

clicker.addEventListener('click', () => {
    clickerCounter.innerHTML = Number(clickerCounter.innerHTML) + 1;
    if (Number(clickerCounter.innerHTML) % 2 !== 0) {
        clicker.style.width = '250px';
    } else {
        clicker.style.width = '200px';
    }
})


const cpsCounter = document.getElementById('cps');

function cps() {
    let clicks = 0;
    let counter = 0;
    let start = Date.now();

    clicker.addEventListener('click', () => {
        clicks++;
        counter = clicks / (Date.now() - start) * 1000;
        cpsCounter.innerHTML = counter.toFixed(2);
    })
}

cps();