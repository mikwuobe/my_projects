document.addEventListener("DOMContentLoaded", function() {
    const toggler = document.querySelector(".navbar-toggler");
    toggler.addEventListener("click", function() {
        const navbar = document.querySelector(".navbar-collapse");
        navbar.classList.toggle("show");
    });
});