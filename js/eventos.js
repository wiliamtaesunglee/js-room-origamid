//!addEventListerner - aciona uma função a partir de um evento
// const img = document.querySelector('img');

// img.addEventListener('click', function() {
//     console.log('clicou');
// });

// //! mesma funcao com arrow function
// img.addEventListener('click', () => {
//     console.log('tmb clicou')
// });


//? É melhor separar a função fr callback do addEventListener

// const img = document.querySelector('img');
// function callback() {
//     console.log('Clicou');
// }

// img.addEventListener('click', callback);
// img.addEventListener('click', callback()); //undefined

// img.addEventListener('click', () => {
//     console.log('clicou');
// });

// img.addEventListener('click', functuion() {
//     console.log('clicou');
// });

//?Event - o primeiro parametro do callback é referente ao evento que ocorreu

// const img = document.querySelector('img');

// function callback(event) {
//     console.log(event);
// }

// img.addEventListener('click', callback);


//? Propriedades do Event

// const animaisLista = document.querySelector('.animais-lista');

// function executarCallback(event) {
//     const currentTarget = event.currentTarget;
//     const target = event.target;
//     const type = event.type;
//     const path = event.path;
//     console.log(currentTarget, target, type, path);
// }

// animaisLista.addEventListener('click', executarCallback);

//! exempro event 1 aponta onde estamos clicando

// const animaisLista = document.querySelector('.animais-lista');

// function callbackLista(event) {
//     console.log(event.currentTarget);
// }

// animaisLista.addEventListener('click', callbackLista);

//! exempro event 2 especifica onde estamos clicando

// const animaisLista = document.querySelector('.animais-lista');

// function callbackLista(event) {
//     console.log(event.target);
// }

// animaisLista.addEventListener('click', callbackLista);

//! exempro event 3 previni comportamento padrão

// const linkExterno = document.querySelector('a[href^="http"]');

// function handleLinkExterno(event) {
//     event.preventDefault();
//     console.log(event);
// }

// linkExterno.addEventListener('click', handleLinkExterno);

//? this pode fazer referencia a diferentes objetos dependendo do contexto, no caso de eventos fará referencia ao elemento que addEventListener foi acionado

// const img = document.querySelector('img');

// function callback(event) {
//     console.log(this);
//     console.log(this.getAttribute('src'));
// }

// img.addEventListener('click', callback);

// https://developer.mozilla.org/pt-BR/docs/Web/Events

//! outros

// const h1 = document.querySelector('h1');

// function handleEvent(event) {
//     console.log(event.type, event);
// }

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);

// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);
// window.addEventListener('keydown', handleEvent);

//? keyboard, pode-se adicionar atalhos para facilitar a navegação

// function handleKeyboard(event) {
//     if (event.key === 'a') {
//         document.body.classList.toggle('azul');
//     }
// };

// window.addEventListener('keydown', handleKeyboard);

//! forEach e Eventos

// const imgs = document.querySelectorAll('img');

// function imgSrc(event) {
//     const src = event.currentTarget.getAttribute('src');
//     console.log(src);
// }

// imgs.forEach((img) =>{
//     img.addEventListener('click', imgSrc);
// });

//! quando o usuario clicar nos links internos do site
// const linksInternos = document.querySelectorAll('a[href^="#"]');

//!adicionar a classe ativo ao item clicando e previnir o comportamento padrão
// function handleLink(event) {
//     event.preventDefault();
//     // console.log(event);

    //! neste loop vamos limpar a classe depois de cada click antes de adicionar ao proximo link clicado
//     linksInternos.forEach((link) => {
//         link.classList.remove('ativo', 'haha');
//     });
//     event.currentTarget.classList.toggle('ativo');
//     this.classList.toggle('haha'); //faz a mesma coisa mas de forma mais economica, rs
// };

// linksInternos.forEach((link) => {
//     link.addEventListener('click', handleLink);
// });

//!selecione todos os elementos do site começando a partir do body
// const todosElementos = document.querySelectorAll('body *');

// function handleElemento(element) {
//     console.log(event.currentTarget);
// }

// todosElementos.forEach((elemento) => {
//         elemento.addEventListener('click', handleElemento)
//     });

//!Para remover:
// const testeDoido = document.querySelectorAll('body *');

// function teste(event) {
//     event.currentTarget.remove();
// }

// testeDoido.forEach((testeD) => {
//     testeD.addEventListener('click', teste);
// });

//!Se o usuario clicar na tecla (t) aumente todo o texto do site

// function handleClickT(event) {
//     console.log(event.key);
//     if(event.key === 't') {
//         document.decumentElement.classList.toggle('textomaior');//vai adicionar uma classe a partir do evento, lembre-se de criar a classe!
//     }
//  }

// window.addEventListener('keydown', handleClickT);