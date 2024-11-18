let modal = document.querySelector('.modal')
window.onload = function () {
    if (localStorage.getItem('modalClosed') === 'true') return
    modal.classList.add('modal_active')
    localStorage.setItem('modalClosed', 'false')
}

modal.querySelector('.modal__close').onclick = function () {
    modal.classList.remove('modal_active')
    localStorage.setItem('modalClosed', 'true')
}