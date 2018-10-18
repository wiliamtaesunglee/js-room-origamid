const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[1]);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);
//o seletor abaixo seleciona o promeiro link
const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[0]);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

// console.log(gridSectionHTML[0]);
// console.log(gridSectionNode[0]);

gridSectionNode.forEach(function(item, index) {
    console.log(item);
});

// const imgSelec = document.querySelectorAll('img');

// const imgSelec = document.querySelectorAll('[src^="img/imagem"]');

// const linksSelect = document.querySelectorAll('[href^="#"]');

// const promeiroH2 = document.querySelectorAll('h2');
// console.log(promeiroH2[0]);

// Selecionar o ultimo ítem

// const paragrafosA = document.querySelectorAll('p');
// console.log(paragrafosA[paragrafosA.length - 1]);
// console.log(paragrafosA.length)