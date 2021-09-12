import refs from './refs';
import API from './apiService';
import modalCard from '../templates/modal-card.hbs';
const apiService = new API();
// ====== localStorage ======
// import LocalStorageUtil from './localStorage';
// const localStorageUtil = new LocalStorageUtil();

refs.gallery.addEventListener('click', onOpenModal);
refs.backdropElt.addEventListener('click', onBackdropClick);

// открытие модального окна
function onOpenModal(e) {
  e.preventDefault();
  if (e.currentTarget !== e.target) {
    refs.backdropElt.classList.add('show-modal');

    const movieId = e.target.parentNode.parentNode.id;
    apiService.fetchAllInfoAboutFilm(movieId).then(response => {
      renderMovieCard(response);
    });
    // refs.bodyElt.classList.add('fixed-body');
  }

  window.addEventListener('keydown', onEscKeyDown);
}

// рендер разметки карточки в backdrop
function renderMovieCard(response) {
  const markupCard = modalCard(response);
  refs.backdropElt.innerHTML = markupCard;
  const closeModalBtnElt = document.querySelector('.modal__close-button');
  closeModalBtnElt.addEventListener('click', onCloseModal);

  const watchedBtnModal = document.querySelector('.modal-watched-button');
  const queueBtnModal = document.querySelector('.modal-queue-button');

  watchedBtnModal.addEventListener('click', onWatched);
  queueBtnModal.addEventListener('click', onQueue);
}

function onWatched(e) {
  const filmId = e.path[4].id;

  putWatched(filmId);
  changeWatchedBtn(filmId);
}

function onQueue(e) {
  const filmId = e.path[4].id;

  putQueue(filmId);
  changeQueueBtn(filmId);
}

function getWatched() {
  const movieStorageId = localStorage.getItem('Watched');
  if (movieStorageId !== null) {
    return JSON.parse(movieStorageId);
  }
  return [];
}

function getQueue() {
  const movieStorageId = localStorage.getItem('Queue');
  if (movieStorageId !== null) {
    return JSON.parse(movieStorageId);
  }
  return [];
}

function putWatched(id) {
  const watchedBtnModal = document.querySelector('.modal-watched-button');
  const movie = getWatched();
  const index = movie.indexOf(id);

  if (index === -1) {
    movie.push(id);
    watchedBtnModal.classList.add('modal-button__active');
    watchedBtnModal.textContent = 'Remove from watched';
  } else {
    movie.splice(index, 1);
    watchedBtnModal.classList.remove('modal-button__active');
    watchedBtnModal.textContent = 'Add to watched';
  }

  localStorage.setItem('Watched', JSON.stringify(movie));
}

function putQueue(id) {
  const queueBtnModal = document.querySelector('.modal-queue-button');
  const movie = getQueue();
  const index = movie.indexOf(id);

  if (index === -1) {
    movie.push(id);
    queueBtnModal.classList.add('modal-button__active');
    queueBtnModal.textContent = 'Remove from queue';
  } else {
    movie.splice(index, 1);
    queueBtnModal.classList.remove('modal-button__active');
    queueBtnModal.textContent = 'Add to queue';
  }

  localStorage.setItem('Queue', JSON.stringify(movie));
}

function changeWatchedBtn(id) {
  const watchedBtnModal = document.querySelector('.modal-watched-button');
  let watchedMovies = localStorage.getItem('Watched');
  // console.log(watchedMovies);
  let parsedMovies = JSON.parse(watchedMovies);
  if (parsedMovies.includes(id)) {
    // console.log('есть в watched');
    watchedBtnModal.textContent = 'Added to watched';
    watchedBtnModal.classList.add('modal-button__active');
    function changeText() {
      watchedBtnModal.textContent = 'Remove from watched';
    }
    setTimeout(changeText, 1000);
  } else {
    // console.log('нет в watched');
    watchedBtnModal.textContent = 'Add to watched';
    watchedBtnModal.classList.remove('modal-button__active');
  }
}

function changeQueueBtn(id) {
  const queueBtnModal = document.querySelector('.modal-queue-button');
  let queueMovies = localStorage.getItem('Queue');
  // console.log(queueMovies);
  let parsedMovies = JSON.parse(queueMovies);
  if (parsedMovies.includes(id)) {
    // console.log('есть в Queue');
    queueBtnModal.textContent = 'Added to queue';
    queueBtnModal.classList.add('modal-button__active');
    function changeText() {
      queueBtnModal.textContent = 'Remove from queue';
    }
    setTimeout(changeText, 1000);
  } else {
    // console.log('нет в Queue');
    queueBtnModal.textContent = 'Add to queue';
    queueBtnModal.classList.remove('modal-button__active');
  }
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
