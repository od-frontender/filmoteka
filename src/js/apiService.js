const API_KEY = 'e942a76391bf600d8ff506ebfde7cc4d';
const BASE_URL = 'https://api.themoviedb.org/3';

export default class API {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  // Запрос на популярные фильмы основной страницы
  fetchPopularFilms() {
    const searchParams = new URLSearchParams({
      query: this.searchQuery,
      page: this.page,
    });
    return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&${this.page}`)
      .then(res => res.json())
      .then(res => {
        return res;
      })
      .catch(err => console.log(err));
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  // Запрос на получения жанров фильмов
  fetchGenres() {
    return fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
      .then(res => res.json())
      .then(res => {
        return res;
      })
      .catch(err => console.log(err));
  }
  // Запрос на получение полной информации о фильме
  fetchAllInfoAboutFilm(movie_id) {
    return fetch(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
      .then(res => res.json())
      .then(res => {
        return res;
      })
      .catch(err => console.log(err));
  }
  fetchFilmsToId(query) {
    return fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`,
    )
      .then(res => res.json())
      .then(res => {
        return res;
      })
      .catch(err => console.log(err));
  }
}
