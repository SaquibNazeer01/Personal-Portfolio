// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeStyle = document.getElementById('theme-style');

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    themeStyle.href = `css/themes/${newTheme}.css`;
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
    
    // Add animation
    themeToggle.classList.add('pulse');
    setTimeout(() => {
        themeToggle.classList.remove('pulse');
    }, 1000);
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Initialize theme
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeStyle.href = `css/themes/${savedTheme}.css`;
    
    const icon = themeToggle.querySelector('i');
    if (savedTheme === 'light') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

// Typewriter Effect
class Typewriter {
    constructor(element, phrases, speed = 100) {
        this.element = element;
        this.phrases = phrases;
        this.speed = speed;
        this.currentPhrase = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.type();
    }

    type() {
        const currentText = this.phrases[this.currentPhrase];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        if (!this.isDeleting && this.charIndex === currentText.length) {
            this.isDeleting = true;
            setTimeout(() => this.type(), 1000);
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.currentPhrase = (this.currentPhrase + 1) % this.phrases.length;
            setTimeout(() => this.type(), 500);
        } else {
            setTimeout(() => this.type(), this.speed);
        }
    }
}

// Initialize typewriter
const typewriterElement = document.querySelector('.typewriter');
if (typewriterElement) {
    const phrases = JSON.parse(typewriterElement.getAttribute('data-text'));
    new Typewriter(typewriterElement, phrases);
}

// Form Submission with Formspree
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.btn-submit');
        const btnSpan = submitBtn.querySelector('span');
        const btnIcon = submitBtn.querySelector('i');
        const originalBtnText = btnSpan.textContent;
        const originalBtnIcon = btnIcon.className;

        // Show loading state
        submitBtn.disabled = true;
        btnSpan.textContent = 'Sending...';
        btnIcon.className = 'fas fa-spinner fa-spin';

        try {
            const formData = new FormData(this);
            const response = await fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success: Show checkmark & redirect
                btnIcon.className = 'fas fa-check';
                btnSpan.textContent = 'Sent!';
                
                // Redirect to thank-you.html after 1.5 seconds
                setTimeout(() => {
                    window.location.href = this.querySelector('[name="_next"]').value;
                }, 1500);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
            // Error state
            btnIcon.className = 'fas fa-exclamation-triangle';
            btnSpan.textContent = 'Failed! Try Again';
            
            // Reset after 3 seconds
            setTimeout(() => {
                btnSpan.textContent = originalBtnText;
                btnIcon.className = originalBtnIcon;
                submitBtn.disabled = false;
            }, 3000);
        }
    });
}

// Initialize radar chart
function initRadarChart() {
    const ctx = document.getElementById('skills-chart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Java', 'JavaScript', 'Python', 'C/C#', 'PHP', 'HTML/CSS', 'DBMS', 'Problem Solving'],
            datasets: [{
                label: 'Skill Level',
                data: [90, 85, 80, 75, 70, 95, 85, 90],
                backgroundColor: 'rgba(108, 99, 255, 0.2)',
                borderColor: 'rgba(108, 99, 255, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(108, 99, 255, 1)',
                pointRadius: 4
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    pointLabels: {
                        color: 'var(--text)',
                        font: {
                            family: 'Fira Code'
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

if (cursor && cursorFollower) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });
    
    // Cursor hover effects
    const hoverElements = document.querySelectorAll('a, button, .project-card, .tab-btn, .tech-tag, .platform-badge');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(2)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// GitHub Projects Fetch (optional)
async function fetchGitHubProjects() {
    try {
        const response = await fetch('https://api.github.com/users/YOUR_USERNAME/repos?sort=updated&per_page=6');
        const projects = await response.json();
        
        const container = document.getElementById('projects-container');
        if (!container) return;
        
        container.innerHTML = projects.map(project => `
            <div class="project-card" data-aos="fade-up">
                <div class="project-header">
                    <h3>${project.name}</h3>
                    <span class="stars">★ ${project.stargazers_count}</span>
                </div>
                <div class="project-content">
                    <p>${project.description || 'No description provided'}</p>
                </div>
                <div class="project-footer">
                    ${project.language ? `<span class="language">${project.language}</span>` : ''}
                    <a href="${project.html_url}" target="_blank" class="hover-effect">
                        <i class="fas fa-code"></i> View Code
                    </a>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Failed to fetch GitHub projects:', error);
        const container = document.getElementById('projects-container');
        if (container) {
            container.innerHTML = `
                <div class="error-message">
                    <p>Failed to load projects. Please check my <a href="https://github.com/YOUR_USERNAME" target="_blank">GitHub profile</a>.</p>
                </div>
            `;
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initRadarChart();
    // fetchGitHubProjects(); // Uncomment if you want to use GitHub projects
});
