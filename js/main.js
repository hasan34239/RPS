const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class", 
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".header_btn", {
    ...scrollRevealOption,
    delay: 100,
});
ScrollReveal().reveal(".about-content", {
    ...scrollRevealOption,
    interval: 100,
    delay: 50,
    easing: 'ease-in-out',
});
ScrollReveal().reveal(".about-img", {
    ...scrollRevealOption,
    delay: 100,
});
ScrollReveal().reveal(".card-container", {
    ...scrollRevealOption,
    interval: 100,
    origin:"right",
});
ScrollReveal().reveal(".card-content", {
    ...scrollRevealOption,
    delay: 100,
});
ScrollReveal().reveal(".feature_list li", {
    ...scrollRevealOption,
    interval: 100,
    origin: "left",
});
