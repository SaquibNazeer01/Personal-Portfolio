class Terminal {
    constructor() {
        this.commands = {
            help: () => this.print('Available commands: about, projects, skills, resume, contact, clear'),
            about: () => {
                this.print('Hello! I am Saquib Nazeer - An Aspiring Software Developer.');
                this.print('I am an aspiring Software Developer with a strong foundation in programming, web development, and problem-solving. My passion lies in leveraging technology to create innovative solutions that enhance user experiences and solve real-world challenges.');
                this.print('I thrive in collaborative environments and am eager to contribute my skills to a dynamic team. I am constantly learning and exploring new technologies to stay ahead in the ever-evolving tech landscape. My goal is to work on impactful projects that make a difference while growing as a developer.');
                this.print('When I am not coding, you can find me tinkering with new tools, contributing to open-source projects, or brainstorming ideas for my next project. I believe in the power of technology to transform lives, and I am excited to be part of that journey.');
            },
            projects: () => {
                this.print('Loading projects...');
                setTimeout(() => {
                    window.location.hash = '#projects';
                    this.print('Navigated to projects section');
                }, 800);
            },
            skills: () => {
                this.print('Technical Skills:');
                this.print('• Languages: Java, JavaScript, Python, C, C#, PHP');
                this.print('• Web: HTML/CSS, React, Node.js, Express');
                this.print('• Databases: MySQL, MongoDB, PostgreSQL');
                this.print('• Platforms: LeetCode, HackerRank, GitHub');
            },
            resume: () => {
                this.print('Opening resume...');
                setTimeout(() => {
                    window.location.hash = '#resume';
                    this.print('Navigated to resume section');
                }, 800);
            },
            contact: () => {
                this.print('Contact Information:');
                this.print('• Email: bhatsaakib505@gmailcom');
                this.print('• Phone: +91 8899779073');
                this.print('Type "help" in terminal for more info');
            },
            clear: () => { 
                document.querySelector('.terminal-body').innerHTML = '';
                return '';
            }
        };
        
        this.init();
    }

    init() {
        const terminal = document.querySelector('.terminal-body');
        if (!terminal) return;
        
        terminal.innerHTML = `
            <p><span class="prompt">$</span> Welcome to my interactive portfolio</p>
            <p><span class="prompt">$</span> Type <span class="command">help</span> for available commands</p>
            <div class="input-line">
                <span class="prompt">$</span>
                <input type="text" id="terminal-input" autocomplete="off" spellcheck="false">
            </div>
        `;

        const input = document.getElementById('terminal-input');
        input.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                this.execute(input.value);
                input.value = '';
            }
        });
        
        input.focus();
    }

    execute(cmd) {
        const terminal = document.querySelector('.terminal-body');
        const inputLine = terminal.querySelector('.input-line');
        
        if (cmd.trim() === '') return;
        
        // Add command to history
        const commandLine = document.createElement('p');
        commandLine.innerHTML = `<span class="prompt">$</span> ${cmd}`;
        terminal.insertBefore(commandLine, inputLine);
        
        // Execute command
        const output = this.commands[cmd.toLowerCase()] 
            ? this.commands[cmd.toLowerCase()]() 
            : `Command not found: ${cmd}. Type 'help' for available commands`;
        
        if (output) this.print(output);
        
        // Scroll to bottom
        terminal.scrollTop = terminal.scrollHeight;
    }

    print(text) {
        const terminal = document.querySelector('.terminal-body');
        const inputLine = terminal.querySelector('.input-line');
        
        if (Array.isArray(text)) {
            text.forEach(line => {
                const p = document.createElement('p');
                p.innerHTML = `<span class="prompt">></span> ${line}`;
                terminal.insertBefore(p, inputLine);
            });
        } else {
            const p = document.createElement('p');
            p.innerHTML = `<span class="prompt">></span> ${text}`;
            terminal.insertBefore(p, inputLine);
        }
    }
}

// Initialize terminal when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.terminal-body')) {
        new Terminal();
    }
});