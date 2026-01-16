const menuIcon = document.querySelector('#menu-icon')
const navLinks = document.querySelector('.nav-links')
const themeBtn = document.querySelector('#theme-btn')
const header = document.querySelector('header')
const sections = document.querySelectorAll('section')
const navAnchors = document.querySelectorAll('header ul li a')
const scrollTopBtn = document.querySelector('#scrollTopBtn');
const scrollDownBtn = document.querySelector('#scrollDownBtn');

// Check local storage for theme preference on load
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeBtn.classList.remove('fa-sun');
    themeBtn.classList.add('fa-moon');
}

themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun');
    themeBtn.classList.toggle('fa-moon');
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');
    navLinks.classList.toggle('active');
}

window.onscroll=()=>{
    // Sticky Header
    header.classList.toggle('sticky', window.scrollY > 100);

    // Scroll Spy (Active Link Highlighting)
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navAnchors.forEach(links => {
                links.classList.remove('active');
                if (links.getAttribute('href').includes(id)) {
                    links.classList.add('active');
                }
            });
        }
    });

    // Scroll Buttons Visibility
    // Show Top button if scrolled down more than 100px
    scrollTopBtn.style.display = window.scrollY > 100 ? 'block' : 'none';
    
    // Show Down button only if not at the bottom
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        scrollDownBtn.style.display = 'none';
    } else {
        scrollDownBtn.style.display = 'block';
    }

    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
    navLinks.classList.remove('active');
}
// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
        navLinks.classList.remove('active');
    });
});

// Scroll Button Actions
scrollTopBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

scrollDownBtn.onclick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

// Project Filter Functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.onclick = () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterValue = btn.getAttribute('data-filter');
        projectCards.forEach(card => {
            if (card.hasAttribute('data-category')) {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    };
});

//Typing Text Animation

const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer','FullStack Developer'],
    typeSpeed:60,
    backSpeed: 60,
    backDelay : 1000,
    loop :true,
});

// Scroll Reveal Animation
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.info-box, .section-title', { origin: 'top' });
ScrollReveal().reveal('.about-container img, .timeline, .skills-container, .projects-grid, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.info-box h1', { origin: 'left' });
ScrollReveal().reveal('.info-box p', { origin: 'right' });
ScrollReveal().reveal('.skill-card', { origin: 'bottom', interval: 100 });