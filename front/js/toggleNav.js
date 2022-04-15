const toggle = document.querySelector(".main-header__burger-container");
const nav = document.querySelector(".main-header__nav");
toggle.addEventListener("click", () => {
	nav.classList.toggle("toggle-nav");
});
