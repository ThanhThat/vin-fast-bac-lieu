const menuMobile = document.getElementById('menu-mobile');
const headerMenu = document.getElementById('header-menu');
let headerHieght = headerMenu.clientHeight;
const menuItems = document.querySelectorAll('.nav > li > a[href*="#"]');

// open menu 
menuMobile.onclick = function() {
    let isClose = headerMenu.clientHeight === headerHieght;
    if (isClose) {
        headerMenu.style.height = 'auto';
    } else {
        headerMenu.style.height = null;
    }
}

// close menu if click menu items
for(let menuItem of menuItems) {
    menuItem.addEventListener('click', function() {
        headerMenu.style.height = null;
    });
}
