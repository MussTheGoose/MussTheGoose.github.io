const menuIcon = document.getElementById('menuIcon');
const dropdownMenu = document.getElementById('dropdownMenu')

// Toggle Menu on Hamburger Click
menuIcon.addEventListener('click', () => {
    //Prevent click from bubbling to document
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
});

// Close menu when clicking outside menu box
document.addEventListener('click', (event) => {
    // If menu is open & click is not on menuIcon/box close menu
    if (
        dropdownMenu.style.display === 'block' &&
        !dropdownMenu.contains(event.target) &&
        !menuIcon.contains(event.target)
    ) {
        dropdownMenu.style.display = 'none';
    }
});