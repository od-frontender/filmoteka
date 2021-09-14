import refs from './refs';
import showGallery from './app';
import API from './apiService';
const apiService = new API();

import LocalStorageUtil from './localStorage';
const localStorageUtil = new LocalStorageUtil();

refs.libraryBtn.addEventListener('click', showLibrary);
refs.homeBtn.addEventListener('click', showMaimPage);

import movieTpl from '../templates/galleryCard.hbs';
import parseMoviesObject from './filterGenres';

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

function showWatchedList() {
  const watchedArray = localStorageUtil.getWatched();

  const w = watchedArray.map(id =>
    apiService.fetchAllInfoAboutFilm(id).then(response => {
      //   const parsedData = parseMoviesObject(response);
      //   console.log(parsedData);
      //   renderWatchedList(parsedData);
      console.log(response);
      //   renderWatchedList(response);
    }),
  );

  function renderWatchedList(response) {
    const markup = movieTpl(response);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
  }
}
