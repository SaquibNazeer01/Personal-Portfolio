// Simple scroll animation implementation
document.addEventListener('DOMContentLoaded', function() {
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('[data-aos]');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementPosition < windowHeight - elementVisible) {
                element.classList.add('aos-animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
const header = document.querySelector('.glass-nav');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.style.backdropFilter = 'blur(20px)';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
    } else {
        header.style.backdropFilter = 'blur(10px)';
        header.style.boxShadow = 'none';
    }
});