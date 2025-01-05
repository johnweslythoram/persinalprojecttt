//copy menu for menu

function copyMenu() {
  var dptCategory = document.querySelector(".dpt-cat");
  var dptPlace = document.querySelector(".departments");
  dptPlace.innerHTML = dptCategory.innerHTML;

  //copy inside Nav to Nav

  var mainNav = document.querySelector(".header-nav nav");
  var navPlace = document.querySelector(".off-canvas nav");
  navPlace.innerHTML = mainNav.innerHTML;

  //copy .header-to .wrapper-class to .thetop-nav

  var topNav = document.querySelector(".header-top .wrapper");
  var topPlace = document.querySelector(".off-canvas .thetop-nav");
  topPlace.innerHTML = topNav.innerHTML;
}

copyMenu();

//show mobile menu
const menuButton = document.querySelector(".trigger"),
  closeButton = document.querySelector(".t-close"),
  addclass = document.querySelector(".site");
menuButton.addEventListener("click", function (event) {
    event.preventDefault();
  addclass.classList.toggle("showmenu");
});
closeButton.addEventListener("click", function (event) {
    event.preventDefault();
  addclass.classList.remove("showmenu");
});

//show sub menu on mobile

const submenu = document.querySelectorAll(".has-child .icon-small");
submenu.forEach((menu) => menu.addEventListener("click", toggle1));

function toggle1(e) {
  e.preventDefault();
  submenu.forEach((item) =>
    item != this ? item.closest(".has-child").classList.remove("expand") : null
  );
  if (this.closest(".has-child").classList != "expand");
  this.closest(".has-child").classList.toggle("expand");
}

//swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
  });

  const searchButton=document.querySelector('.t-search')
  
  
