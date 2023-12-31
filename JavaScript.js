const navbar = document.querySelector(".navbar");
const menuBtn = document.getElementById("menu-btn");
const cartItem = document.querySelector(".cart-items-container");
const cartBtn = document.getElementById("cart-btn");
const searchForm = document.querySelector(".search-form");
const searchBtn = document.getElementById("search-btn");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  cartItem.classList.remove("active");
  searchForm.classList.remove("active");
});

cartBtn.addEventListener("click", () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
});

searchBtn.addEventListener("click", () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
});

window.addEventListener("scroll", () => {
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
  searchForm.classList.remove("active");
});
