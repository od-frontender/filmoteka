const htmlBody = document.querySelector('.body');
console.log(htmlBody);
const htmlCheckbox = document.querySelector('.checkbox');
console.log(htmlCheckbox);

htmlCheckbox.addEventListener('click', changeTheme);

function changeTheme() {
    htmlBody.classList.toggle('dark-theme');
}