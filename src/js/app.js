import movieTpl from '../templates/galleryCard.hbs';
import fetchPopularFilms from './apiService';
import fetchGenres from './apiService';
import refs from './refs';

// Функция выводит список пополярных фильмов на основную старницу
function showGallery() {
  const filmsData = fetchPopularFilms();
  filmsData.then(response => {
    renderMoviesList(response);
  });
}
showGallery();

// Функция рендерит карточки фильмов на основной странице
function renderMoviesList(response) {
  const markup = movieTpl(response);
  refs.gallery.innerHTML = markup;
}
