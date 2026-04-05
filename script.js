// Function for a simple typewriter effect on the highlight text
const typeWriter = (selector, text, delay = 100) => {
    let i = 0;
    const element = document.querySelector(selector);
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, delay);
};

// Intersection Observer for scroll animations
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        } else {
            entry.target.classList.remove('appear'); // Optional: removes when scrolled away
        }
    });
});

// Event Listener when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Add subtle console log for project identification
    console.log("EduCloud Project - Cloud Computing Website.");

    // 2. Clear then re-type the highlight word (Interactive Effect)
    const highlightSpan = document.querySelector('.highlight');
    if (highlightSpan) {
        const text = highlightSpan.textContent;
        highlightSpan.textContent = '';
        setTimeout(() => typeWriter('.highlight', text), 1000); // starts after a delay
    }

    // 3. Setup scroll animation triggers
    const animateElements = document.querySelectorAll('.animate-scroll');
    animateElements.forEach(el => scrollObserver.observe(el));

    // 4. Mobile Menu Toggle
    const mobileMenu = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('is-active'); // For potential menu animation
    });
});