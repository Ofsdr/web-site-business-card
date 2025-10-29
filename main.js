window.addEventListener("scroll", () => {
    const header = document.querySelector(".main-header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const navbar = document.getElementById("navbar");

    if (currentScroll > lastScrollTop) {
    
        navbar.style.top = "-80px";
    } else {
        
        navbar.style.top = "0";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);