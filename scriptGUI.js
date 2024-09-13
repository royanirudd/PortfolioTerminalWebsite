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
    const items = document.querySelectorAll('.item');
    const buttons = document.querySelectorAll('.site-buttons button');
    
    // Change the border color of all items
    items.forEach(item => {
        item.style.borderColor = color;
    });

    // Change the background color of buttons in item 1
    buttons.forEach(button => {
        button.style.backgroundColor = color;
    });
}
function toggleMode() {
    const body = document.body;
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
}


