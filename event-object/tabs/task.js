const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContents = Array.from(document.querySelectorAll('.tab__content')); 



tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tab.classList.toggle('tab_active');
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab__content_active');
        });
        tabContents[index].classList.add('tab__content_active');
    });
})