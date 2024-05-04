document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileNav = document.getElementById("mobile-nav");
    const closeMobileNav = document.getElementById("close-mobile-nav");

    mobileMenu.addEventListener("click", function () {
        mobileNav.classList.toggle("closed-menu");
    });

    closeMobileNav.addEventListener("click", function () {
        mobileNav.classList.add("closed-menu");
    });

    // Get all navigation links
    const navLinks = document.querySelectorAll('nav ul a');

    // Add click event listener to each navigation link
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            
            // Get the target section id
            const targetId = this.getAttribute("href").substring(1);

            // Scroll to the target section smoothly
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
        
        // Close mobile navigation immediately after clicking a link
        link.addEventListener("click", function () {
            mobileNav.classList.add("closed-menu");
        });
    });
});
