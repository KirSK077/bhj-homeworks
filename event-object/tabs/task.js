const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContents = Array.from(document.querySelectorAll('.tab__content')); 
let activeTabIndex = 0

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        activeTabIndex = tabs.indexOf(tab);
        tabs.forEach((tab) => {
            tab.classList.remove('tab_active');
        })
        tab.classList.add('tab_active');
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab__content_active');
        })
        tabContents[activeTabIndex].classList.add('tab__content_active');
    })
})
