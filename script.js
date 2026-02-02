document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Simple animation for hamburger (optional text change or icon rotation)
            if (navLinks.classList.contains('active')) {
                hamburger.textContent = '✕'; // Close icon
            } else {
                hamburger.textContent = '☰'; // Menu icon
            }
        });
    }

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.textContent = '☰';
        });
    });

    // Highlight active page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-levels a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Image Slider Logic
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const wrapper = document.querySelector('.slider-wrapper');

    // Function to move slides
    window.moveSlide = function (direction) {
        currentSlide += direction;

        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
        }

        updateSlider();
    };

    function updateSlider() {
        if (wrapper) {
            wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }

    // Auto Slide every 10 seconds
    setInterval(() => {
        moveSlide(1);
    }, 10000);

    // Lightbox Logic
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    window.openLightbox = function (imgElement) {
        lightbox.style.display = "flex";
        lightboxImg.src = imgElement.src;
        document.body.style.overflow = "hidden"; // Disable scroll
    };

    window.closeLightbox = function () {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto"; // Enable scroll
    };
});
