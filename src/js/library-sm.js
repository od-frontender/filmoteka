import refs from './refs';
import showGallery from './app';
import API from './apiService';
import LocalStorageUtil from './localStorage';
import lib from '../templates/lib.hbs';
const apiService = new API();
const localStorageUtil = new LocalStorageUtil();

refs.libraryBtn.addEventListener('click', showLibrary);
refs.homeBtn.addEventListener('click', showMainPage);

function showLibrary() {
  refs.headerBckgr.classList.remove('header__background');
  refs.headerBckgr.classList.add('library__background');
  refs.headerSearchInputWrapper.classList.add('visually-hidden');
  refs.watchedBtnLibrary.classList.remove('visually-hidden');
  refs.watchedBtnLibrary.classList.remove('activeBtn');
  refs.queueBtnLibrary.classList.remove('visually-hidden');
  refs.queueBtnLibrary.classList.remove('activeBtn');
  refs.homeBtn.classList.remove('current');
  refs.libraryBtn.classList.add('current');
  // refs.gallery.innerHTML = '<h2 style="margin: 0 auto;">Choose watched or queued movies!</h2>';
  refs.loadMoreBtn.classList.add('visually-hidden');
  refs.error.classList.add('visually-hidden');
  refs.gallery.innerHTML = '';
  apiService.resetPage();
}

// function onEmptyList() {
//   refs.gallery.innerHTML =
//     '<h2 style="margin: 0 auto;">You May Contain This List by Yourself at Homepage...</h2>';
// }

function showMainPage() {
  refs.headerBckgr.classList.add('header__background');
  refs.headerBckgr.classList.remove('library__background');
  refs.headerSearchInputWrapper.classList.remove('visually-hidden');
  refs.watchedBtnLibrary.classList.add('visually-hidden');
  refs.queueBtnLibrary.classList.add('visually-hidden');
  refs.homeBtn.classList.add('current');
  refs.libraryBtn.classList.remove('current');
  refs.loadMoreToSearchBtn.classList.add('visually-hidden');
  refs.loadMoreBtn.classList.remove('visually-hidden');
  refs.error.classList.add('visually-hidden');
  refs.gallery.innerHTML = '';
  apiService.resetPage();
  showGallery();
}

refs.watchedBtnLibrary.addEventListener('click', showWatchedList);
refs.queueBtnLibrary.addEventListener('click', showQueueList);

function showWatchedList() {
  refs.watchedBtnLibrary.classList.add('activeBtn');
  refs.queueBtnLibrary.classList.remove('activeBtn');
  refs.gallery.innerHTML = '';
  const watchedArray = localStorageUtil.getWatched();
  // console.log(watchedArray);

  watchedArray.map(id =>
    apiService.fetchAllInfoAboutFilm(id).then(response => {
      renderWatchedList(response);
    }),
  );
}

function renderWatchedList(response) {
  const markup = lib(response);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

function showQueueList() {
  refs.watchedBtnLibrary.classList.remove('activeBtn');
  refs.queueBtnLibrary.classList.add('activeBtn');
  refs.gallery.innerHTML = '';
  const queueArray = localStorageUtil.getQueue();
  // console.log(watchedArray);

  queueArray.map(id =>
    apiService.fetchAllInfoAboutFilm(id).then(response => {
      renderQueueList(response);
    }),
  );
}

function renderQueueList(response) {
  const markup = lib(response);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export { showWatchedList, showQueueList, showMainPage };
