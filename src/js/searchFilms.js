import refs from './refs';
import API from './apiService';
import galleryCard from '../templates/galleryCard.hbs';
import showGallery from './app';
import parseMoviesObject from './filterGenres';
const apiService = new API();

refs.searchForm.addEventListener('submit', onSearchFilms);
// refs.searchInput.addEventListener('input', resetOnSearch);

console.log(refs.searchInput.value);

// Фукция поиска фильма по вводимому значению
function onSearchFilms(e) {
  e.preventDefault();

  apiService.query = e.currentTarget.elements.query.value;
  refs.gallery.innerHTML = '';

  refs.error.classList.add('visually-hidden');
  apiService
    .fetchFilmsToId()
    .then(res => {
      const parsedData = parseMoviesObject(res.results);
      addFilmsMarkup(parsedData);
      if (parsedData.length === 0) {
        refs.error.classList.remove('visually-hidden');
        refs.loadMoreToSearchBtn.classList.add('visually-hidden');
        showGallery();
        return;
      }
      refs.loadMoreToSearchBtn.classList.remove('visually-hidden');
    })
    .then(res => console.log(res));

  refs.searchForm.reset();
  refs.loadMoreBtn.classList.add('visually-hidden');
}
// Функция рендерит карточки фильмов с поиска на основную страницу
function addFilmsMarkup(query) {
  const markup = galleryCard(query);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

refs.loadMoreToSearchBtn.addEventListener('click', onLoadMoreFilmToSearch);

// // Функция рендерит карточки фильмов с поиска на основную страницу по loadMore

function onLoadMoreFilmToSearch() {
  apiService.incrementPage();
  apiService.fetchFilmsToId().then(res => {
    addFilmsMarkup(parseMoviesObject(res.results));
  });
}
