export default function initDropDownMenu() {

}

const dropDownMenu = document.querySelectorAll('[data-dropdown]');

dropDownMenu.forEach(menu => {
  ['touchstart', 'click'].forEach(userEvent => {
  menu.addEventListener(userEvent, handleClick)

  })
});

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle('active');
}