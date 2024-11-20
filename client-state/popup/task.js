const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__close');


window.onload = () => {
    if (document.cookie.split(';').includes('modalClose=true')) return
    modal.classList.add('modal_active');
}

modalCloseBtn.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = 'modalClose=true';
})