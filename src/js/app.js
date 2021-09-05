import movieTpl from '../templates/galleryCard.hbs';
import fetchPopularFilms from './apiService';
import genres from './Data/genresData.json';
import refs from './refs';

// Функция парсит жанры для карточки галлереи
function parseGenres(array) {
  return array.map(el => ({
    ...el,
    genre_ids: el.genre_ids.length
      ? [
          ...genres.reduce(
            (acc, { id, name }) => (el.genre_ids.includes(+id) ? [...acc, name] : acc),
            [],
          ),
        ]
      : ['Жанры отсутствуют'],
  }));
}


// Функция выводит список популярных фильмов на основную старницу
function showGallery() {
  const filmsData = fetchPopularFilms();
  filmsData.then(response => {
    const parsedData = parseGenres(response.results);
    renderMoviesList(parsedData);
  });
}
showGallery();
// Функция рендерит карточки фильмов на основной странице
function renderMoviesList(response) {
  const markup = movieTpl(response);
  refs.gallery.innerHTML = markup;
}