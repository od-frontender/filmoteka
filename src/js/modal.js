import refs from './refs';
import API from './apiService';
import modalCard from '../templates/modal-card.hbs';
const apiService = new API();

refs.gallery.addEventListener('click', onOpenModal);
// refs.moviesItemElt.addEventListener('click', onOpenModal);
// refs.closeModalBtnElt.addEventListener('click', onCloseModal);
refs.backdropElt.addEventListener('click', onBackdropClick);

// открытие модального окна
// function onOpenModal(e) {
//   e.preventDefault();
//   if (e.target.nodeName === 'UL') {
//     return;
//   }
//   const filmId = e.target.parentNode.parentElement.id;

//   apiService.fetchAllInfoAboutFilm(filmId).then(response => {
//     renderMoviesCard(response);
//   });

//   if (e.currentTarget !== e.target) {
//     refs.backdropElt.classList.add('show-modal');
//   }
//   window.addEventListener('keydown', onEscKeyDown);
// }
// функция рендерит разметку карточки в backdrop
// function renderMoviesCard(response) {
//   const markupCard = modalCard(response);
//   refs.backdropElt.innerHTML = markupCard;
// }

// закрытие модального окна по клику на кнопку закрытия
function onCloseModal(e) {
  refs.backdropElt.classList.remove('show-modal');
  window.removeEventListener('keydown', onEscKeyDown);
}

// закрытие модального окна по клику на бекдроп
function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

// закрытие модального окна при нажатии на escape
function onEscKeyDown(e) {
  // console.log(e.key);
  if (e.code === 'Escape') {
    onCloseModal();
  }
}
