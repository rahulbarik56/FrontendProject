'use strict';




 // element toggle function
 

const toggleElem = function (elem) { elem.classList.toggle("active"); }




 // navbar toggle
 

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navTogglers.length; i++) {
  navTogglers[i].addEventListener("click", function () {
    toggleElem(navbar);
    toggleElem(overlay);
  });
}




 //header sticky & back to top button
 

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    header.classList.add("header-anim");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
    header.classList.remove("header-anim");
  }
});




 // search box toggle
 

const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    toggleElem(searchBox);
  });
}




 // whishlist button toggle
 

const whishlistBtns = document.querySelectorAll("[data-whish-btn]");

for (let i = 0; i < whishlistBtns.length; i++) {
  whishlistBtns[i].addEventListener("click", function () {
    toggleElem(this);
  });
}


//  path navigation 
// const navLinkEls = document.querySelectorAll('.navbar-link'); // Corrected the selector

// const windowPathname = window.location.pathname;

// navLinkEls.forEach(navLinkEl => { // Corrected the variable name
//   const navLinkPathname = new URL(navLinkEl.href).pathname;

//   if (windowPathname === navLinkPathname || (windowPathname === '/index.html' && navLinkPathname === '/')) {
//     navLinkEl.classList.add('active');
//   }
// });


// const activePage = window.location.pathname;
// const navlinks = document.querySelectorAll('.navbar-link').
// forEach(link => {
//   if(link.href.includes(`${activePage}`)){
//     console.log(`${activePage}`);
//     link.classList.add('active');
//   }
// })
