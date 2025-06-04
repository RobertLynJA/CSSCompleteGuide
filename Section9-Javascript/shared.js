var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var noButton = document.querySelector(".modal__action--negative");
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}   

const closeModal = () => {
    modal.classList.remove('open');
    backdrop.classList.remove('open');
}

backdrop.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  closeModal();
});

noButton.addEventListener('click', closeModal);

toggleButton.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open');
});