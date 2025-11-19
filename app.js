// Menú hamburguesa
const hamburger = document.querySelector(".hamburger");
const navRight = document.querySelector(".nav-right");
const navItems = document.querySelectorAll(".nav-right li");

// Toggle menu
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navRight.classList.toggle("active");
});

// Cerrar menu al hacer click en un item
navItems.forEach(item => {
    item.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navRight.classList.remove("active");
    });
});

// Tabs del slider
const tabs = document.querySelectorAll(".tab");
const slider = document.querySelector(".slider-wrapper");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const index = tab.getAttribute("data-target");
        const slideWidth = document.querySelector(".slide").offsetWidth;
        slider.style.transform = `translateX(-${index * slideWidth}px)`;
    });
});

// Efecto scroll en navbar
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});