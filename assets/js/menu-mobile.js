const menuMobile = document.getElementById('menu-mobile');
const headerMenu = document.getElementById('header-menu');
let headerHieght = headerMenu.clientHeight;
const menuItems = document.querySelectorAll('.nav > li > a[href*="#"]');
const menuLis = document.querySelectorAll('.nav > li');
const burger = document.querySelector('#menu-mobile-icon--burger');
const menuIconClose = document.querySelector('#menu-mobile-icon--close');
menuIconClose.classList.add('menu-mobile-icon--none');

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

// ẩn nút close menu khi click vào items
for (i=1; i<menuItems.length; i++) {
    menuItems[i].addEventListener('click', () => {
        burger.classList.toggle('menu-mobile-icon--none');
        menuIconClose.classList.toggle('menu-mobile-icon--none');
    })
}

burger.addEventListener('click', () => {
    burger.classList.toggle('menu-mobile-icon--none');
    menuIconClose.classList.toggle('menu-mobile-icon--none');
    for(let menuLi of menuLis) {
        menuLi.style.animation = `slideMenu ease 0.3s forwards ${1/6}s`;
    }
})

menuIconClose.addEventListener('click', () => {
    burger.classList.toggle('menu-mobile-icon--none');
    menuIconClose.classList.toggle('menu-mobile-icon--none');
    for(let menuLi of menuLis) {
        menuLi.style.animation = null;
    }
})
