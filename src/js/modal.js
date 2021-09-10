import refs from './refs';
import API from './apiService';
import modalCard from '../templates/modal-card.hbs';
const apiService = new API();

refs.gallery.addEventListener('click', onOpenModal);
refs.backdropElt.addEventListener('click', onBackdropClick);
// refs.closeModalBtnElt.addEventListener('click', onCloseModal);

// открытие модального окна
function onOpenModal(e) {
  e.preventDefault();
  if (e.currentTarget !== e.target) {
    refs.backdropElt.classList.add('show-modal');
    apiService.fetchAllInfoAboutFilm(e.target.parentNode.parentNode.id).then(response => {
      renderMovieCard(response);
    });
    refs.bodyElt.classList.add('fixed-body');
  }

  window.addEventListener('keydown', onEscKeyDown);
}

// рендер разметки карточки в backdrop
function renderMovieCard(response) {
  const markupCard = modalCard(response);
  refs.backdropElt.innerHTML = markupCard;
}

// закрытие модального окна по клику на кнопку закрытия
function onCloseModal(e) {
  refs.backdropElt.innerHTML = '';
  refs.backdropElt.classList.remove('show-modal');
  refs.bodyElt.classList.remove('fixed-body');
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
