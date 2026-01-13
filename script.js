/* ---------- MOBILE NAV TOGGLE ---------- */
const toggle  = document.querySelector('.nav-toggle');
const navbar  = document.querySelector('.navbar');
toggle.addEventListener('click', () => navbar.classList.toggle('open'));

/* ---------- ACTIVE NAV LINK ON SCROLL ---------- */
const sections = document.querySelectorAll(
    'section[id]'
); /* <--- auto na kumukuha ng lahat ng <section id="..."> */
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
        const secTop = sec.offsetTop - 100;
        if (scrollY >= secTop) current = sec.getAttribute('id');
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) link.classList.add('active');
    });
});

/* ---------- ANIMATE ON SCROLL (AOS) ---------- */
AOS.init({ once: true, offset: 100, duration: 800 });

/* ---------- DYNAMIC YEAR ---------- */
document.getElementById('year').textContent = new Date().getFullYear();