import movieTpl from '../templates/galleryCard.hbs';
import genres from './Data/genresData';
import refs from './refs';
import API from './apiService';

const apiService = new API();

// Функция парсит жанры для карточки галлереи
function parseGenres(array) {
  return array.map(el => ({
    ...el,
    genre_ids: el.genre_ids.length
      ? [
          ...genres.reduce(
            (acc, { id, name }) => (
              el.genre_ids.includes(+id) 
              ? [...acc, name].slice(0, 3) 
              : acc), [],
          ),
        ]
      : ['Unknown'],
  }));
}



// Функция парсит заголовок, дату и жанры для карточки галлереи - Тестовая функция, нужно доделать

// function parseMoviesObject(array) {
//   array.forEach(elem => {
//     if (elem.title.length > 35) {
//       elem.title = elem.title.slice(0, 35) + '...';
//     }
   
//     elem.release_date
//       ? (elem.release_date = elem.release_date.slice(0, 4))
//       : (elem.release_date = 'Unknown');

//     // Функция от ментора - парсит жанры для карточки галлереи
//     array.map(el => ({
//       ...el,
//       genre_ids: el.genre_ids.length
//           ? [...genres.reduce(
//             (acc, { id, name }) => (el.genre_ids.includes(+id) 
//                   ? [...acc, name].slice(0, 3) 
//                   : acc), [],
//               ),]
//           : ['Unknown'],
//       }));
//   });
//   return array;
// }


// Функция выводит список популярных фильмов на основную старницу
export default function showGallery() {
  apiService.fetchPopularFilms().then(response => {
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
