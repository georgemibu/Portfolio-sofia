const tabs = document.querySelectorAll('.tab');
const slider = document.querySelector('.slider-wrapper');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const index = tab.getAttribute('data-target');
        slider.style.transform = `translateX(-${index * 1248}px)`;
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }
});
