// Function to handle "Add to Cart" button clicks
function initializeCartButtons() {
    const cartButtons = document.querySelectorAll('.add-to-cart');
    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Item added to cart!');
        });
    });
}

// Function to handle "Add All to Cart" button click
function initializeAddAllButton() {
    const addAllButton = document.querySelector('.add-all-to-cart');
    if (addAllButton) {
        addAllButton.addEventListener('click', () => {
            alert('All items added to cart!');
        });
    }
}

// Function to initialize tabs
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const targetTab = event.currentTarget;
            const targetContent = document.getElementById(targetTab.getAttribute('data-tab-target'));

            // Remove active classes from buttons and content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to the clicked button and corresponding content
            targetTab.classList.add('active');
            targetContent.classList.add('active');
        });
    });
}

// Initialize all functionalities when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeCartButtons();
    initializeAddAllButton();
    initializeTabs();
});

// Initialize cart and checkout functionality
let cart = []; // Array to store cart items

// Add to Cart Function
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCartCount();
    alert(`${productName} has been added to your cart.`);
}

// Update Cart Count
function updateCartCount() {
    const cartButton = document.querySelector('.cart-button');
    cartButton.innerText = `Cart (${cart.length})`;
}

// View Cart Function
function viewCart() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        let cartDetails = 'Items in your cart:\n';
        cart.forEach(item => {
            cartDetails += `- ${item.name}: $${item.price.toFixed(2)}\n`;
        });
        alert(cartDetails);
    }
}

// Checkout Function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items before checking out.');
    } else {
        alert('Proceeding to checkout...');
        // Add additional logic for checkout process
        cart = []; // Clear the cart
        updateCartCount(); // Reset the cart count
    }
}

// Function to play audio on the About page
function playAudioOnAboutPage() {
    // Check if the current page is the "about" page
    if (window.location.pathname.includes("about.html")) {
        // Get the audio player by its ID
        var audioPlayer = document.getElementById("audio-player");
        // Play the audio
        audioPlayer.play();
    }
}

// Call the function when the document is fully loaded
window.onload = playAudioOnAboutPage;

// Function to scroll to a specific section by its ID
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId); // Get the section element by ID
    if (section) {
        // Scroll to the section with smooth behavior
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Function for Tab Navigation
function openTab(event, tabId) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    // Show the selected tab and mark button as active
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}
// Toggle the mobile menu visibility
function toggleMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.toggle('active'); // Toggle the "active" class to show/hide the menu
}

