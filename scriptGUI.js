// Theme toggle functionality
const themeSwitch = document.getElementById('themeSwitch');
const body = document.body;

// Modal functionality
const modal5 = document.getElementById("modal-5");
const modal8 = document.getElementById("modal-8");
const item5 = document.getElementById("item-5");
const item8 = document.getElementById("item-8");
const closeButtons = document.getElementsByClassName("close");



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

// Open modal when clicking on items
item5.onclick = function() {
    modal5.style.display = "block";
}

item8.onclick = function() {
    modal8.style.display = "block";
}

// Close modal when clicking on close button
for (let closeButton of closeButtons) {
    closeButton.onclick = function() {
        modal5.style.display = "none";
        modal8.style.display = "none";
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal5 || event.target == modal8) {
        modal5.style.display = "none";
        modal8.style.display = "none";
    }
}
