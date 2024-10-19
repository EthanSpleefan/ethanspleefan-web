document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');


    header.style.opacity = 0;
    setTimeout(() => {
        header.style.transition = 'opacity 1s ease-in-out';
        header.style.opacity = 1;
    }, 100);

   
    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.transform = 'scale(1.02)';
            section.style.transition = 'transform 0.3s ease-in-out';
        });

        section.addEventListener('mouseleave', () => {
            section.style.transform = 'scale(1)';
        });
    });


    const aboutSection = document.querySelector('#about p');
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = 'Good morning';
    } else if (currentHour < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }

    aboutSection.textContent = `${greeting}! ${aboutSection.textContent}`;
});