import refs from './refs';
import showGallery from './app';
import API from './apiService';
const apiService = new API();

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
  apiService.resetPage();
  showGallery();
}
