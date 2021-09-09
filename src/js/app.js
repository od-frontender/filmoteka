import movieTpl from '../templates/galleryCard.hbs';
import genres from './Data/genresData';
import refs from './refs';
import API from './apiService';

// Функция парсит жанры для карточки галлереи
function parseGenres(array) {
  return array.map(el => ({
    ...el,
    genre_ids: el.genre_ids.length
      ? [
          ...genres.reduce(
            (acc, { id, name }) => (el.genre_ids.includes(+id) ? [...acc, name].slice(0, 3) : acc),
            [],
          ),
        ]
      : ['Unknown'],
  }));
}

// Тестовая функция, нужно доделать
// Функция парсит дату и заголовок для карточки галлереи
// function parseMoviesObject(array) {
//   array.forEach(elem => {
//     elem.release_date
//       ? (elem.release_date = elem.release_date.slice(0, 4))
//       : (elem.release_date = 'Unknown');
//   });

//   return array.map(el => ({
//     ...el,
//     genre_ids: el.genre_ids.length
//       ? [
//           ...genres.reduce(
//             (acc, { id, name }) => (el.genre_ids.includes(+id) ? [...acc, name] : acc),
//             [],
//           ),
//         ]
//       : ['Unknown'],
//   }));
// }

// Функция выводит список популярных фильмов на основную старницу
function showGallery() {
  API.fetchPopularFilms().then(response => {
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
