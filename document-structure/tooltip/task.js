const tooltip = document.querySelectorAll('.has-tooltip');

// Функция добавления всплывающей подсказки
function addTooltip(event) {
    const tooltipBox = document.createElement('div');
    tooltipBox.classList.add('tooltip', 'tooltip_active');
    tooltipBox.textContent = event.target.getAttribute('title');
    tooltipBox.setAttribute('data-position', 'bottom');
    event.target.after(tooltipBox);
    const rect = event.target.getBoundingClientRect();
    // console.log(rect);
    // console.log(tooltipBox.offsetHeight, tooltipBox.offsetWidth);
    switch (tooltipBox.getAttribute('data-position')) {
        case 'left':
            tooltipBox.style.top = `${rect.y - rect.height / 4}px`
            tooltipBox.style.left = `${rect.x - tooltipBox.offsetWidth > 0 ? rect.x - tooltipBox.offsetWidth : 0}px`;
            break;
        case 'right':
            tooltipBox.style.top = `${rect.top - rect.height / 4}px`;
            tooltipBox.style.left = `${rect.right + tooltipBox.offsetWidth > window.innerWidth ? window.innerWidth - tooltipBox.offsetWidth : rect.right}px`;
            break;
        case 'top':
            tooltipBox.style.top = `${rect.top - rect.height * 1.5}px`;
            tooltipBox.style.left = `${rect.x + (rect.width - tooltipBox.offsetWidth) / 2}px`;
            break;
        case 'bottom':
            tooltipBox.style.top = `${rect.bottom}px`;
            tooltipBox.style.left = `${rect.x + (rect.width - tooltipBox.offsetWidth) / 2}px`;
            break;
    } 
}
// Добавление всплывающей подсказки при нажатии на ссылку
tooltip.forEach(el => {
    el.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelectorAll('.tooltip').forEach(el => el.remove());
        addTooltip(event);
    });
});
// Удаление всплывающей подсказки при нажатии в любом месте странцы
document.addEventListener('click', (event) => {
    if (!event.target.classList.contains('has-tooltip')) {
        document.querySelectorAll('.tooltip').forEach(el => {
            el.remove();
        });
    }
});