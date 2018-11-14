// const section = document.querySelector('.animais');

// section.clientHeight; //! height + padding 
// section.offsetHeight;   //! height + padding + border
// section.scrollHeight;   //! height total, mesmo dentro do scroll


//! altura do elemento selecionado
// const listaAnimais = document.querySelector('.animais-lista');
// const height = listaAnimais.scrollHeight;
// console.log(height);

//!distancia do elemento ao topo da pagina
// const listaAnimais = document.querySelector('.animais-lista');
// const height = listaAnimais.scrollHeight;
// const animaisTop = listaAnimais.offsetTop;
// console.log(animaisTop);

//!distancia lateral (esquerda)
// const primeiroh2 = document.querySelector('h2');
// const h2left = primeiroh2.offsetLeft;
// console.log(h2left);

//!retorna a distancia lateral, superior e inferor
// const primeiroh2 = document.querySelector('h2')
// const rect = primeiroh2.getBoundingClientRect();
// console.log(rect.height); => pode ser top, right, etc...

//!retorna a altura exata da janela
// console.log(
//     window.innerWidth,
//     window.innerHeight,
//     window.outerWidth,
//     window.outerWidth
// );

//!scroll da janela rodado
// console.log(
//     window.pageYOffset,
//     window.pageXOffset
// );

//!"meida query do JS"
// const small = window.matchMedia('(max-width: 600px)').matches;

// if (small) {
//     console.log('usuario mobile');
// } else {
//     console.log('usuario desktop');
// };

//!Exercícios

// distancia primeira imagem ao topo da pagina
// const img = document.querySelector('img');
// const imgTop = img.offsetTop;
// console.log(imgTop);

//Soma da largura de todas as imagens //! exige a propriedade onload, ou seja, precisamos fazer a pagina carregar antes de requisitar as propriedades das imagens
// function somaImagens() {    
//     const imagens = document.querySelectorAll('img');
//     imagens.forEach( (imagem) =>{
//         console.log(imagem.offsetWidth);
//     });
// }

// window.onload = function() {
//     somaImagens();
// };

//!Verificar se os links das paginas possuem o minimo recomendado para telas utilizadas com o dedo (48/48 px de acordo com o google)
// const links = document.querySelectorAll('a');

// links.forEach((link) => {
//     const linkWidth = link.offsetWidth;
//     const linkHeight = link.offsetHeight;
//     if(linkWidth >= 48 && linkHeight >= 48) {
//         console.log(link, 'possui boa acessibilidade ')
//     } else {
//         console.log('nao possui boa acessibilidade')
//     }
// });

//! browser menor que 720 adicionar menu-mobile
// const browserSmall = window.matchMedia('(max-width: 720px)').matches;

// if(browserSmall) {
//     const menu = document.querySelector('.menu');
//     menu.classList.add('menu-mobile');
// }