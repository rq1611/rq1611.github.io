// AOS Init
AOS.init({
  duration: 900,
  easing: "ease-out-cubic",
});

// Typing Effect
const text = "Web Developer • student from Universitas Pasundan";
const target = document.querySelector(".typing-text");
let i = 0;

function typing() {
  if (i < text.length) {
    target.textContent += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
typing();

// Hamburger Menu
const toggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
