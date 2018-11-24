export default function initTooltip() {

}

const tooltips = document.querySelectorAll('[data-toopltip]');
tooltips.forEach((item) => {
  item.addEventListener('mouseover', onMouseOver);
})

function onMouseOver(event) {
  console.log(event);
}

console.log('helloS');