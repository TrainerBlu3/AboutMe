// Hamburger Menu Toggle 
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");
        document.body.classList.toggle("menu-open");
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
            document.body.classList.remove("menu-open");
        });
    });
}