import refs from './refs';
import API from './apiService';
import galleryCard from '../templates/galleryCard.hbs';
import showGallery from './app';
const apiService = new API();

refs.searchForm.addEventListener('submit', onSearchFilms);
refs.searchInput.addEventListener('input', resetOnSearch);

console.log(refs.searchInput.value);

function onSearchFilms(e) {
  e.preventDefault();
  const value = e.currentTarget.elements.query.value;
  refs.gallery.innerHTML = '';
  apiService.fetchFilmsToId(value).then(res => {
    addFilmsMarkup(res.results);
  });
}

function addFilmsMarkup(query) {
  const markup = galleryCard(query);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}
function resetOnSearch() {
  if (refs.searchInput.value === '') {
    showGallery();
    return;
  }
}
