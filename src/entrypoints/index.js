document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const body = item.querySelector('.accordion-body');

        header.addEventListener('click', () => {
            console.log('click');

            item.classList.toggle('active');
            body.style.maxHeight = item.classList.contains('active') ? body.scrollHeight + 'px' : 0;
        });
    });
});