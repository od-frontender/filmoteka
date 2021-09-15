import refs from './refs';
import showGallery from './app';
import API from './apiService';
const apiService = new API();

refs.libraryBtn.addEventListener('click', showLibrary);
refs.homeBtn.addEventListener('click', showMainPage);

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
  refs.loadMoreToSearchBtn.classList.add('visually-hidden');
  refs.error.classList.add('visually-hidden');
}
export default function showMainPage() {
  refs.headerBckgr.classList.add('header__background');
  refs.headerBckgr.classList.remove('library__background');
  refs.headerSearchInputWrapper.classList.remove('visually-hidden');
  refs.watchedBtnLibrary.classList.add('visually-hidden');
  refs.queueBtnLibrary.classList.add('visually-hidden');
  refs.homeBtn.classList.add('current');
  refs.libraryBtn.classList.remove('current');
  refs.loadMoreToSearchBtn.classList.add('visually-hidden');
  refs.loadMoreBtn.classList.remove('visually-hidden');
  refs.gallery.innerHTML = '';
  refs.error.classList.add('visually-hidden');
  apiService.resetPage();
  showGallery();
}
