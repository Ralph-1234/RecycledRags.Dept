const cartIcon = document.querySelector("#menu-icon");
const cart = document.querySelector(".menus");
const cartClose = document.querySelector("#menu-close");
cartIcon.addEventListener("click", () => cart.classList.add("active"));
cartClose.addEventListener("click", () => cart.classList.remove("active"));