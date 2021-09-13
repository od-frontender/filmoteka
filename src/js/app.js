import movieTpl from '../templates/galleryCard.hbs';
import refs from './refs';
import API from './apiService';
import parseMoviesObject from './filterGenres';
const apiService = new API();

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
  refs.gallery.innerHTML = markup;
}
