import movieTpl from '../templates/galleryCard.hbs';
import refs from './refs';
import API from './apiService';
import parseMoviesObject from './filterGenres';
// import qwerty from './loader';
const apiService = new API();
import { showMainPage } from './library-sm';

refs.logo.addEventListener('click', resetAll);
refs.homeBtn.addEventListener('click', resetAll);

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

function resetAll() {
  apiService.resetPage();
  showMainPage();
  showGallery();
}
