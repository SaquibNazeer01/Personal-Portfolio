function loadManualProjects() {
    try {
        const container = document.getElementById('projects-container');
        if (!container) {
            throw new Error("Projects container not found");
        }

        const projects = [
            {
                name: "SwiftInsureX",
                description: "Built a web-based system for managing insurance policies, claims, and customer interactions with in-built <strong>AI ChatBot</strong> Assistance. Integrates WhatsApp reminders for payments and renewals.",
                status: "completed",
                githubUrl: "https://github.com/SaquibNazeer01/Insurance-Management-System",
                deployUrl: "https://swiftinsurex.wuaze.com",
                imageUrl: "assets/images/projects/insurance.png",
                languages: ["PHP", "JavaScript"]
            },
            {
                name: "Cricket Tournament Manager",
                description: "Built a web-based tournament management system, automating team registration and fee tracking. Integrated WhatsApp API for real-time notifications.",
                status: "under-development",
                githubUrl: "https://github.com/SaquibNazeer01/Cricket-Tournament-Manager",
                deployUrl: "https://cricket-tournament-manager.vercel.app/",
                imageUrl: "assets/images/projects/cricket-tournament.jpg",
                languages: ["JavaScript"]
            },
            {
                name: "Expense Manager",
                description: "Developed an Expense Manager application to track daily expenses, categorize spending, and generate visual expense reports. Integrated data encryption for security.",
                status: "completed",
                githubUrl: "https://github.com/SaquibNazeer01/Expense-Manager",
                deployUrl: "https://vercel.com/saquib-nazeers-projects/expense-manager/DQYu2jAKJrgwPrAickYKzPxE4cPg",
                imageUrl: "assets/images/projects/expense.png",
                languages: ["JavaScript"]
            },
            {
                name: "Visitor Management System",
                description: "Designed and implemented an automated visitor check-in/check-out system, improving facility security and reducing manual work by 60%.",
                status: "completed",
                githubUrl: "https://github.com/SaquibNazeer01/VisitorManagementSystem",
                deployUrl: null,
                imageUrl: "assets/images/projects/visitor-management.jpg",
                languages: ["Java"]
            },
            {
                name: "AI-Powered Market Prediction Tool",
                description: "Developing an AI-powered tool to predict market trends using machine learning algorithms. The tool will provide actionable insights through data visualization.",
                status: "under-development",
                githubUrl: null,
                deployUrl: null,
                imageUrl: "assets/images/projects/market-prediction.jpg",
                languages: ["Python"]
            },
            {
                name: "Mining Game",
                description: "Addictive mining game where players click on boxes to reveal hidden treasures. Each box may be safe or contain a bomb — choose wisely! Collect rewards without triggering bombs.",
                status: "completed",
                githubUrl: "https://github.com/SaquibNazeer01/Mining_Game",
                deployUrl: "https://vercel.com/saquib-nazeers-projects/mining-game/G6KZYstKAbSccXmHkiKSpqE3TLMH",
                imageUrl: "assets/images/projects/mining.png",
                languages: ["JavaScript"]
            },
            {
                name: "Face Recognition Attendance system",
                description: "Developed a facial recognition-based attendance system that accurately records student attendance using their facial features.",
                status: "Completed",
                githubUrl: null,
                deployUrl: "https://youtu.be/zxWtZIFV2-U?si=a2Fitm5zYI5f07B5",
                imageUrl: "assets/images/projects/Attendance.JPG",
                languages: ["Python"]
            },
            {
                name: "Smart Screen Controller",
                description: "Smart Classroom Controller – Control slides and zoom using hand gestures and voice commands for seamless, touch-free teaching.",
                status: "Completed",
                githubUrl: null,
                deployUrl: "https://youtu.be/0fmJsbo6oIk?si=pGdZCy7MdWNg9LZR",
                imageUrl: "assets/images/projects/smartcontroller.JPG",
                languages: ["Python"]
            }
        ];

        container.innerHTML = projects.map((project, index) => `
            <div class="project-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="project-image-container">
                    <img src="${project.imageUrl}" alt="${project.name}" class="project-image" loading="lazy"
                         onerror="this.src='assets/images/projects/default-project.jpg'">
                    <span class="status-badge ${project.status.toLowerCase().replace(' ', '-')}">
                        ${project.status.replace('-', ' ')}
                    </span>
                </div>
                <div class="project-info">
                    <h3>${project.name}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-footer">
                        <div class="project-languages">
                            ${project.languages.map(lang => `
                                <span class="language-tag">${lang}</span>
                            `).join('')}
                        </div>
                        <div class="project-links">
                            ${project.githubUrl ? `
                            <a href="${project.githubUrl}" target="_blank" aria-label="GitHub" class="project-link">
                                <i class="fab fa-github"></i>
                            </a>
                            ` : ''}
                            ${project.deployUrl ? `
                            <a href="${project.deployUrl}" target="_blank" aria-label="Live Demo" class="project-link">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

    } catch (error) {
        console.error("Error loading projects:", error);
        const container = document.getElementById('projects-container');
        if (container) {
            container.innerHTML = `
                <div class="load-error">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>Projects could not be loaded. View my work on <a href="https://github.com/SaquibNazeer01" target="_blank">GitHub</a></p>
                </div>
            `;
        }
    }
}

// Initialize when DOM is ready
if (document.readyState === 'complete') {
    loadManualProjects();
} else {
    document.addEventListener('DOMContentLoaded', loadManualProjects);
}
