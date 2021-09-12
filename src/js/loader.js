
//======================Var1==============================//
// loadSpinner();

// function loadSpinner() {
//   window.onload = function () {
//     document.body.classList.add('loaded_hiding');
//     window.setTimeout(function () {
//       document.body.classList.add('loaded');
//       document.body.classList.remove('loaded_hiding');
//     }, 500);
//   }
// } 


//======================Var2==============================//

// function loadSpinner() {
//   window.onload = () => {
//   let preloader = document.getElementById('preloader');
//   preloader.style.display = 'none';
// }
// }

// loadSpinner();

//======================Var3==============================//

// function loadSpinner() {
//   let preLoader = document.querySelector('#preloader');

// window.addEventListener('load', () => {
//     setTimeout(() => {
//         preLoader.remove();
//         $('body').removeClass('scroll-off');
//     }, 1000);
// })
// }

// loadSpinner();
let preLoader = document.querySelector('#preloader');

window.addEventListener('load', () => {
    setTimeout(() => {
        preLoader.remove();
        $('body').removeClass('scroll-off');
    }, 1000);
})

