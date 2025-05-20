



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
const slides = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const dotsContainer = document.querySelector('.dots-container');

  let index = 0;
  const imageWidth = images[0].clientWidth + 20; // 20 for margin

  function updateSlider() {
    slides.style.transform = `translateX(-${index * imageWidth}px)`;
    document.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function createDots() {
    images.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        index = i;
        updateSlider();
      });
      dotsContainer.appendChild(dot);
    });
  }

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateSlider();
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateSlider();
  });

  window.addEventListener('resize', () => {
    updateSlider(); // Adjust slider on window resize
  });

  createDots();