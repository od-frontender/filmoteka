import refs from './refs';
import API from './apiService';
import modalCard from '../templates/modal-card.hbs';
import { showWatchedList, showQueueList } from './library-sm';
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
    document.body.parentNode.style.overflow = 'hidden'; //Анна: убрала скролл при открытой модалке
    const movieId = e.target.parentNode.parentNode.id;
    apiService.fetchAllInfoAboutFilm(movieId).then(response => {
      renderMovieCard(response);
      changeWatchedBtn(movieId);
      changeQueueBtn(movieId);
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

// отрисовка галереи просмотренных фильмов
function onWatched(e) {
  const filmId = e.path[4].id;

  putWatched(filmId);
  changeWatchedBtn(filmId);
}

// отрисовка галереи фильмов в очереди на просмотр
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

// // добавление/удаление ID фильмов в/из списка просмотренных
// function putWatched(id) {
//   // const watchedBtnModal = document.querySelector('.modal-watched-button');
//   // const queueBtnModal = document.querySelector('.modal-queue-button');
//   const watchedMovie = getWatched();
//   const queueMovie = getQueue();
//   const watchedIndex = watchedMovie.indexOf(id);
//   const queueIndex = queueMovie.indexOf(id);
//   if (queueIndex === -1) {
//     if (watchedIndex === -1) {
//       watchedMovie.push(id);
//       // watchedBtnModal.classList.add('modal-button__active');
//       // watchedBtnModal.textContent = 'Remove from watched';
//     }
//     if (watchedIndex !== -1) {
//       watchedMovie.splice(watchedIndex, 1);
//       // watchedBtnModal.classList.remove('modal-button__active');
//       // watchedBtnModal.textContent = 'Add to watched';
//     }
//   } else {
//     queueMovie.splice(queueIndex, 1);
//     watchedMovie.push(id);
//     // queueBtnModal.classList.remove('modal-button__active');
//     // queueBtnModal.textContent = 'Add to queue';
//     // watchedBtnModal.classList.add('modal-button__active');
//     // watchedBtnModal.textContent = 'Remove from watched';
//   }

//   localStorage.setItem('Watched', JSON.stringify(watchedMovie));
// }

// добавление/удаление ID фильмов в/из списка просмотренных
function putWatched(id) {
  const watchedMovie = getWatched();
  const watchedIndex = watchedMovie.indexOf(id);

  if (watchedIndex === -1) {
    watchedMovie.push(id);
  } else {
    watchedMovie.splice(watchedIndex, 1);
  }
  localStorage.setItem('Watched', JSON.stringify(watchedMovie));
}

// добавление/удаление ID фильмов в/из очереди
function putQueue(id) {
  const queueMovie = getQueue();
  const queueIndex = queueMovie.indexOf(id);

  if (queueIndex === -1) {
    queueMovie.push(id);
  } else {
    queueMovie.splice(queueIndex, 1);
  }
  localStorage.setItem('Queue', JSON.stringify(queueMovie));
}

function changeWatchedBtn(id) {
  const watchedBtnModal = document.querySelector('.modal-watched-button');
  let watchedMovies = localStorage.getItem('Watched');
  let parsedMovies = JSON.parse(watchedMovies);
  if (parsedMovies.includes(id)) {
    // watchedBtnModal.textContent = 'Added to watched';
    watchedBtnModal.classList.add('modal-button__active');
    watchedBtnModal.textContent = 'Remove from watched';
    // function changeText() {
    //   watchedBtnModal.textContent = 'Remove from watched';
    // }
    // setTimeout(changeText, 1000);
  } else {
    watchedBtnModal.textContent = 'Add to watched';
    watchedBtnModal.classList.remove('modal-button__active');
  }
}

function changeQueueBtn(id) {
  const queueBtnModal = document.querySelector('.modal-queue-button');
  let queueMovies = localStorage.getItem('Queue');
  let parsedMovies = JSON.parse(queueMovies);
  if (parsedMovies.includes(id)) {
    // queueBtnModal.textContent = 'Added to queue';
    queueBtnModal.classList.add('modal-button__active');
    queueBtnModal.textContent = 'Remove from queue';
    // function changeText() {
    //   queueBtnModal.textContent = 'Remove from queue';
    // }
    // setTimeout(changeText, 1000);
  } else {
    queueBtnModal.textContent = 'Add to queue';
    queueBtnModal.classList.remove('modal-button__active');
  }
}

// закрытие модального окна по клику на кнопку закрытия
function onCloseModal(e) {
  refs.backdropElt.innerHTML = '';
  refs.backdropElt.classList.remove('show-modal');
  document.body.parentNode.style.overflow = 'visible'; //Анна: скролл работает при закрытой модалке
  refs.bodyElt.classList.remove('fixed-body');
  window.removeEventListener('keydown', onEscKeyDown);
  if (
    refs.libraryBtn.classList.contains('current') &&
    refs.watchedBtnLibrary.classList.contains('activeBtn')
  ) {
    showWatchedList();
  }
  if (
    refs.libraryBtn.classList.contains('current') &&
    refs.queueBtnLibrary.classList.contains('activeBtn')
  ) {
    showQueueList();
  }
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
