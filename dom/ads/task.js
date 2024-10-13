const rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));

let activeCaseIndex = 0;
let speed = rotatorCases[activeCaseIndex].dataset.speed;

function rotateAds() {
    rotatorCases.forEach((rotatorCase) => {
        rotatorCase.classList.remove('rotator__case_active');
    })
    rotatorCases[activeCaseIndex].classList.add('rotator__case_active');
    rotatorCases[activeCaseIndex].style.color = rotatorCases[activeCaseIndex].dataset.color;
    speed = rotatorCases[activeCaseIndex].dataset.speed;
    activeCaseIndex = (activeCaseIndex + 1) % rotatorCases.length;

    setTimeout(rotateAds, speed);
}

rotateAds();
