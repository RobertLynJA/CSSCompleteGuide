const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll(".plan button");

for (const button of selectPlanButtons) {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  });
}