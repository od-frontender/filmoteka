import movieTpl from '../templates/galleryCard.hbs';
import refs from './refs';
import API from './apiService';
import parseMoviesObject from './filterGenres';
// import qwerty from './loader';
const apiService = new API();

refs.logo.addEventListener('click', showMainPage);

// Функция выводит список популярных фильмов на основную старницу
export default function showGallery() {
  apiService.fetchPopularFilms().then(response => {
    const parsedData = parseMoviesObject(response.results);
    renderMoviesList(parsedData);
  });
}
showGallery();

// Функция рендерит карточки фильмов на основной странице
function renderMoviesList(response) {
  const markup = movieTpl(response);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}
//функция добавляет карточки га главной странице
refs.loadMoreBtn.addEventListener('click', onLoadMore);
function onLoadMore() {
  apiService.incrementPage();
  showGallery();
}
//функция отрысовует галерею

function showMainPage() {
  refs.gallery.innerHTML = '';
  apiService.resetPage();
  showGallery();
  refs.loadMoreBtn.classList.remove('visually-hidden');
}
