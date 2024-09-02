const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost' );
const hole = document.getElementsByClassName('hole');

function playing() {
    let deadCount = 0;
    let lostCount = 0;

    for (let i = 0; i < hole.length; i++) {
        hole[i].onclick = function () {
            if (hole[i].className.includes('hole_has-mole')) {
                deadCount++;
                deadCounter.innerHTML = deadCount;
            } else {
                lostCount++;
                lostCounter.innerHTML = lostCount;
            }
            if (deadCount > 9) {
                alert('Вы победили!');
                deadCount = 0;
                lostCount = 0;
                deadCounter.innerHTML = deadCount;
                lostCounter.innerHTML = lostCount;
            } else if (lostCount > 3) {
                alert('Вы проиграли!');
                deadCount = 0;
                lostCount = 0;
                deadCounter.innerHTML = deadCount;
                lostCounter.innerHTML = lostCount;
            }
        }
    }
}

playing();
