import refs from './refs';
import showGallery from './app';
import API from './apiService';
import LocalStorageUtil from './localStorage';
import lib from '../templates/lib.hbs';

const apiService = new API();
const localStorageUtil = new LocalStorageUtil();

refs.libraryBtn.addEventListener('click', showLibrary);
refs.homeBtn.addEventListener('click', showMaimPage);

function showLibrary() {
  refs.headerBckgr.classList.remove('header__background');
  refs.headerBckgr.classList.add('library__background');
  refs.headerSearchInputWrapper.classList.add('visually-hidden');
  refs.watchedBtnLibrary.classList.remove('visually-hidden');
  refs.queueBtnLibrary.classList.remove('visually-hidden');
  refs.homeBtn.classList.remove('current');
  refs.libraryBtn.classList.add('current');
  refs.gallery.innerHTML = '';
  refs.loadMoreBtn.classList.add('visually-hidden');
}

function showMaimPage() {
  refs.headerBckgr.classList.add('header__background');
  refs.headerBckgr.classList.remove('library__background');
  refs.headerSearchInputWrapper.classList.remove('visually-hidden');
  refs.watchedBtnLibrary.classList.add('visually-hidden');
  refs.queueBtnLibrary.classList.add('visually-hidden');
  refs.homeBtn.classList.add('current');
  refs.libraryBtn.classList.remove('current');
  refs.loadMoreToSearchBtn.classList.add('visually-hidden');
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

export { showWatchedList, showQueueList };
