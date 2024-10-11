const dropdownList = document.querySelectorAll('.dropdown__list');
const dropdownValue = document.querySelectorAll('.dropdown__value');


Array.from(dropdownValue).forEach((item) => {
    item.addEventListener('click', () => {
        item.nextElementSibling.classList.toggle('dropdown__list_active');
    })
})

Array.from(dropdownList).forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        item.closest('.dropdown').querySelector('.dropdown__value').textContent = event.target.textContent;
        item.classList.remove('dropdown__list_active');
    })
})

