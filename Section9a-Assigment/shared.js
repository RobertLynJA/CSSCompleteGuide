var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var noButton = document.querySelector(".modal__action--negative");

// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}   

backdrop.addEventListener('click', function() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
});

noButton.addEventListener('click', function() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
});