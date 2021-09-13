const API_KEY = 'e942a76391bf600d8ff506ebfde7cc4d';
const BASE_URL = 'https://api.themoviedb.org/3';

export default class API {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  // Запрос на популярные фильмы основной страницы
  fetchPopularFilms() {
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${this.page}`;
    return fetch(url)
      .then(res => res.json())
      .then(res => {
        // this.incrementPage();
        return res;
      })
      .catch(err => console.log(err));
  }
  // Запрос на получения жанров фильмов
  async fetchGenres() {
    const url = `${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`;
    try {
      const response = await fetch(url);
      const { genres } = await response.json();
      return genres;
    } catch (error) {
      console.log(error);
    }
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
  // Запрос на получение информации по поиску
  fetchFilmsToId() {
    return fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${this.searchQuery}&language=en-US&page=${this.page}&include_adult=false`,
    )
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
}
