const elSitenavToggler = document.querySelector(".site-header__sitenav-toggler");
const elSiteHeader = document.querySelector(".site-header");

elSitenavToggler.addEventListener("click", function () {
  elSiteHeader.classList.toggle("site-header--open");
});