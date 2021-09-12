const htmlBody = document.querySelector('.body');

const htmlCheckbox = document.querySelector('.checkbox');

htmlCheckbox.addEventListener('click', changeTheme);

function changeTheme() {
  htmlBody.classList.toggle('dark-theme');
}
