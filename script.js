



const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownContent = document.querySelector('.dropdown-content');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

dropdownToggle.addEventListener('click', (e) => {
    e.stopPropagation();  // prevent clicks from closing the menu
    dropdownContent.classList.toggle('active');
});

// Optional: close dropdown if clicking outside
document.addEventListener('click', () => {
    dropdownContent.classList.remove('active');
});
