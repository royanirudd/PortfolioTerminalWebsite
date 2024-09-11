const output = document.getElementById('output');
const input = document.getElementById('command-input');
const checkbox = document.getElementById('checkbox');

const asciiArt = `
    _          _                _ _       ____             
   / \\   _ __ (_)_ __ _   _  __| | |__   |  _ \\ ___  _   _ 
  / _ \\ | '_ \\| | '__| | | |/ _\` | '_ \\  | |_) / _ \\| | | |
 / ___ \\| | | | | |  | |_| | (_| | | | | |  _ < (_) | |_| |
/_/   \\_\\_| |_|_|_|   \\__,_|\\__,_|_| |_| |_| \\_\\___/ \\__, |
                                                     |___/ 
    `;

function addToOutput(text) {
    const div = document.createElement('div');
    if (text.startsWith('anirudh@portfolio:$ ~')) {
        div.innerHTML = '<span class="prompt-name">anirudh</span><span class="prompt-at">@</span><span class="prompt-location">portfolio</span><span class="prompt-colon">:</span><span class="prompt-path">$</span><span class="prompt-tilde"> ~</span>' + text.slice('anirudh@portfolio:$ ~'.length);
    } else {
        div.innerHTML = text;
    }
    output.appendChild(div);
    window.scrollTo(0, document.body.scrollHeight);
}

function clearOutput() {
    output.innerHTML = '';
}

function typeEffect(element, text, speed = 50) {
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

const commands = {
    help: () => {
        addToOutput('Available commands:');
        addToOutput('  help     - Show this help message');
        addToOutput('  about    - Display information about me');
        addToOutput('  projects - List my projects');
        addToOutput('  skills   - Show my technical skills');
        addToOutput('  contact  - Display my contact information');
        addToOutput('  resume   - Download my resume');
        addToOutput('  clear    - Clear the terminal screen');
        addToOutput('  history  - Show command history');
    },
    about: () => {
        addToOutput('About Me:');
        addToOutput('I am Anirudh Roy, a passionate developer with a keen interest in [Your Interests].');
        addToOutput('I specialize in [Your Specializations] and love to create innovative solutions.');
        // Add more details about yourself
    },
    projects: () => {
        addToOutput('My Projects:');
        addToOutput('1. Project Name - Brief description');
        addToOutput(`   <a href="https://github.com/yourusername/project1" target="_blank" class="project-link">GitHub</a>`);
        addToOutput('2. Another Project - Brief description');
        addToOutput(`   <a href="https://github.com/yourusername/project2" target="_blank" class="project-link">GitHub</a>`);
        // Add more projects
    },
    skills: () => {
        addToOutput('Technical Skills:');
        addToOutput('- Programming Languages: JavaScript, Python, Java');
        addToOutput('- Web Technologies: HTML, CSS, React, Node.js');
        addToOutput('- Databases: MySQL, MongoDB');
        addToOutput('- Tools: Git, Docker, AWS');
        // Add or modify skills as needed
    },
    contact: () => {
        addToOutput('Contact Information:');
        addToOutput('Email: your.email@example.com');
        addToOutput('LinkedIn: https://www.linkedin.com/in/yourprofile');
        addToOutput('GitHub: https://github.com/yourusername');
        // Add other contact methods if desired
    },
    resume: () => {
        addToOutput('Downloading resume...');
        // Replace with the actual path to your resume
        window.open('assets/your_resume.pdf', '_blank');
    },
    clear: () => {
        clearOutput();
    },
    history: () => {
        addToOutput('Command history:');
        commandHistory.slice().reverse().forEach((cmd, index) => {
            addToOutput(`${commandHistory.length - index}: ${cmd}`);
        });
    }
};

addToOutput(asciiArt);
const welcomeDiv = document.createElement('div');
output.appendChild(welcomeDiv);
typeEffect(welcomeDiv, 'Welcome to my portfolio! Type "help" for a list of commands.');

let commandHistory = [];
let historyIndex = -1;

function autocomplete(input) {
    const commandNames = Object.keys(commands);
    const matchingCommands = commandNames.filter(cmd => cmd.startsWith(input));
    
    if (matchingCommands.length === 1) {
        return matchingCommands[0];
    } else if (matchingCommands.length > 1) {
        addToOutput(matchingCommands.join('  '));
        return input;
    }
    
    return input;
}

input.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        event.preventDefault();
        input.value = autocomplete(input.value);
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            input.value = commandHistory[historyIndex];
        }
    } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (historyIndex > -1) {
            historyIndex--;
            input.value = historyIndex >= 0 ? commandHistory[historyIndex] : '';
        }
    }
});

input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const command = input.value.trim().toLowerCase();
        addToOutput('anirudh@portfolio:$ ~ ' + input.value);
        
        if (command !== '') {
            commandHistory.unshift(command);
            historyIndex = -1;
        }
        
        input.value = '';

        if (command in commands) {
            commands[command]();
        } else {
            addToOutput('Command not recognized. Type "help" for a list of commands.');
        }
    }
});

// Theme switch functionality
checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.replace('dark-mode', 'light-mode');
    } else {
        document.body.classList.replace('light-mode', 'dark-mode');
    }
});
