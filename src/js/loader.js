const wrapper = document.querySelector('.loader-wrapper');

loadSpinner();

function loadSpinner() {
  window.addEventListener('load', () => {
    wrapper.classList.add('.hide');
    setTimeout(() => {
      wrapper.remove();
    }, 1000);
  });
}
