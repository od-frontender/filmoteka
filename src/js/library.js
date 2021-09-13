import refs from './refs';

refs.libraryBtn.addEventListener('click', showLibrary);

function showLibrary() {
  refs.headerBckgr.classList.remove('header__background');
  refs.headerBckgr.classList.add('library__background');
  refs.headerSearchInputWrapper.classList.add('visually-hidden');
  refs.watchedBtnLibrary.classList.remove('visually-hidden');
  refs.queueBtnLibrary.classList.remove('visually-hidden');
  refs.homeBtn.classList.remove('current');
  refs.libraryBtn.classList.add('current');
  refs.gallery.innerHTML = '';
}
