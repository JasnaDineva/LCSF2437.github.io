// name: jasna dineva 
// file name: script.js
//date: 2024-12-05



// Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links"); // Use the correct variable 'menu'
    if (menu.style.display === "block") {
        menu.style.display = "none"; // Hide the menu
    } else {
        menu.style.display = "block"; // Show the menu
    }
}
