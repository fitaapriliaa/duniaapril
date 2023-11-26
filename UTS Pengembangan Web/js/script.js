// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika humberger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle('active');
};

// Toggle class active untuk Search Form
const searchForm = document.querySelector('.search-form');
const searcbox= document.querySelector('#search-box');

document.querySelector('#search-button').onclick = () => {
  searchForm.classList.toggle('active');
  searchForm.();

  
}

// klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
