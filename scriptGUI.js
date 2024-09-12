document.addEventListener('DOMContentLoaded', () => {
    const cliSwitch = document.getElementById('cli-switch');
    const themeToggle = document.getElementById('checkbox');

    cliSwitch.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.replace('dark-mode', 'light-mode');
        } else {
            document.body.classList.replace('light-mode', 'dark-mode');
        }
    });

    // Check if there's a saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.className = savedTheme;
        themeToggle.checked = savedTheme === 'light-mode';
    }
});
