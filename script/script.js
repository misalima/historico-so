const titles = document.querySelectorAll("h2");

titles.forEach((title) => {
    title.addEventListener('click', (e) => {
        const next = title.nextElementSibling;
        
    
        if(next.classList.contains('visible')) {
            next.classList.remove('visible');
        } else {
            next.classList.add('visible');
        }
    })
})