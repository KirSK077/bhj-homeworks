const tooltip = document.querySelectorAll('.has-tooltip');


tooltip.forEach(el => {
    el.addEventListener('click', (event) => {

        event.preventDefault();
        
        const tooltipText = event.target.getAttribute('title');
        const tooltipBox = document.createElement('div');
        tooltipBox.classList.add('tooltip', 'tooltip_active');
        tooltipBox.textContent = tooltipText;
        
        event.target.append(tooltipBox);

        tooltipBox.setAttribute('data-position', 'bottom');
        const rect = event.target.getBoundingClientRect();
        console.log(rect);
        console.log(tooltipBox.offsetHeight, tooltipBox.offsetWidth, tooltipBox.offsetHeight);
        switch (tooltipBox.getAttribute('data-position')) {
            case 'left':
                tooltipBox.style.top = `${rect.top - tooltipBox.offsetHeight / 4}px`
                tooltipBox.style.left = `${rect.left < tooltipBox.offsetWidth ? rect.width : rect.left - tooltipBox.offsetWidth}px`;
                break;
            case 'right':
                tooltipBox.style.top = `${rect.top - tooltipBox.offsetHeight / 4}px`;
                tooltipBox.style.left = `${rect.right}px`;
                break;
            case 'top':
                tooltipBox.style.top = `${rect.top - tooltipBox.offsetHeight}px`;
                tooltipBox.style.left = `${rect.left + (rect.width - tooltipBox.offsetWidth) / 2}px`;
                break;
            case 'bottom':
                tooltipBox.style.top = `${rect.bottom}px`;
                tooltipBox.style.left = `${rect.left + (rect.width - tooltipBox.offsetWidth) / 2}px`;
                break;
        }

        document.addEventListener('click', (event) => {
            if (!el.contains(event.target)) {
                tooltipBox.classList.remove('tooltip_active');
              }
        })
    })
});
