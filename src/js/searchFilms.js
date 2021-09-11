import refs from './refs';
import API from './apiService';
import galleryCard from '../templates/galleryCard.hbs';
import showGallery from './app';
var debounce = require('lodash.debounce');

const apiService = new API();

refs.searchForm.addEventListener('input', debounce(onSearchFilms, 800));

function onSearchFilms(e) {
  e.preventDefault();

  const value = e.target.value;
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

function addFilmsMarkup(query) {
  const markup = galleryCard(query);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

// function addFilmsMarkup(films) {
//     refs.gallery.insertAdjacentHTML('beforeend', galleryCard(films));
// }

// function searchFilms(event) {
//     event.preventDefault();
//     const search = event.currentTarget.elements.query.value.trim()
//     apiService.searchQuery = search;

//     if (search === '') {
//         apiService.resetPage();

//     return;
//     }

//     addFilmsMarkup(films);
//     apiServices.resetPage();
// }
