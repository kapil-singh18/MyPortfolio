
// Init year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle with persistence
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme) { root.setAttribute('data-theme', savedTheme); }
themeToggle?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});

// Scroll progress
const progressBar = document.getElementById('progressBar');
const updateProgress = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = progress + '%';
};
window.addEventListener('scroll', updateProgress);
window.addEventListener('resize', updateProgress);
updateProgress();

// Reveal on scroll (IntersectionObserver)
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('show'); io.unobserve(entry.target); }
    })
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
