const menuBtn = document.querySelector('.menu-icon'),
 mobileMenu = document.querySelector('.menu-wrapper'),
 menuClose = document.querySelector('.close-icon'),
 menuList = document.querySelector('.menu-list');

menuBtn.onclick = function() {
  mobileMenu.style.left = '0';
  menuClose.style.transform = 'rotate(90deg)';
}

menuClose.onclick = function() {
  mobileMenu.style.left = '-100%';
  menuClose.style.transform = 'rotate(-90deg)';
}

menuList.onclick = function(e) {
 if (e.target.classList.contains('menu-list-item')) {
  mobileMenu.style.left = '-100%';
  menuClose.style.transform = 'rotate(-90deg)';
 }
}