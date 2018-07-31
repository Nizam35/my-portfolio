// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const cogBtn = document.querySelector('.cog-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;
let cogMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

// cogBtn.addEventListener('click', togglecogMenu);

// function togglecogMenu() {
//   if (!cogMenu) {
//     document.getElementById("mySidenav").style.width = "250px";
//     cogMenu = true;
//   } else {
//     document.getElementById("mySidenav").style.width = "0";
//     cogMenu = false;
//   }
// }
// To change the background color
// const a1 = document.getElementById('a1');
// const b2 = document.getElementById('b2');
// const c3 = document.getElementById('c3');
// const d4 = document.getElementById('d4');
// a1.addEventListener('click', ac1);

// function ac1() {
//   // change body color
//   alert('this is not working');

// }