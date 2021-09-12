import refs from './refs';
import API from './apiService';
import galleryCard from '../templates/galleryCard.hbs';
import showGallery from './app';
const apiService = new API();

refs.search.addEventListener('submit', onSearchFilms);

function onSearchFilms(e) {
  e.preventDefault();

  const value = e.currentTarget.elements.query.value;
  console.log(value);
  refs.gallery.innerHTML = '';

  apiService.fetchFilmsToId(value).then(res => {
    addFilmsMarkup(res.results);
  });

  if (value === '') {
    showGallery();
    return;
  }
}

// function addFilmsMarkup(query) {
//   const markup = galleryCard(query);
//   refs.gallery.insertAdjacentHTML('beforeend', markup);
//   // function addFilmsMarkup(data) {
//   //     if (data.length !== 0) {
//   //         const markup = galleryCard(data);
//   //         refs.gallery.insertAdjacentHTML('beforeend', markup);
//   //     }
// }

// function onSearchFilms(evt) {
//   evt.preventDefault();

//   const value = evt.currentTarget.elements.query.value;
//   console.log(value);
//   refs.gallery.innerHTML = '';
//   apiService.fetchFilmsToId(value).then(addFilmsMarkup);
// }
