const API_KEY = 'e942a76391bf600d8ff506ebfde7cc4d';
const BASE_URL = 'https://api.themoviedb.org/3';

// Запрос на популярные фильмы основной страницы
function fetchPopularFilms() {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(res => {
      return res;
    })
    .catch(err => console.log(err));
}
export default fetchPopularFilms;
// Запрос на получения жанров фильмов
function fetchGenres() {
  return fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(res => {
      return console.log(res);
    })
    .catch(err => console.log(err));
}
