const btns = document.querySelectorAll('.car__detail');
const modals = document.querySelectorAll('.modal');
const modalClose = document.querySelectorAll('.modal__close');
const modalContainer = document.querySelectorAll('.modal__container');

for (let i = 0; i < 12; i++) {
    btns[i].addEventListener('click', function() {
        modals[i].classList.add('open');
        modalClose[i].addEventListener('click', function() {
            modals[i].classList.remove('open');
        })

        modals[i].addEventListener('click', function() {
            modals[i].classList.remove('open');
        })

        modalContainer[i].addEventListener('click', function(e) {
            e.stopPropagation();
        })
    });
}