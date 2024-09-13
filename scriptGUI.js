// Theme toggle functionality
const themeSwitch = document.getElementById('themeSwitch');
const body = document.body;

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    }
});

function changeBorderColor(color) {
    const buttons = document.querySelectorAll('.item-1 .social-button');

    // Change the border color of all buttons in item-1
    buttons.forEach(button => {
        button.style.borderColor = color;
    });
}


function toggleMode() {
    const body = document.body;
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
}

