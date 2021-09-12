
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

function loadSpinner() {
  window.onload = () => {
  let preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
}
}

loadSpinner();




