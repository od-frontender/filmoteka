import refs from './refs';
import API from './apiService';
import galleryCard from '../templates/galleryCard.hbs';
import showGallery from './app';
import loadSpinner from './loader';
var debounce = require('lodash.debounce');

const apiService = new API();

refs.searchForm.addEventListener('input', debounce(onSearchFilms, 1000));

function onSearchFilms(e) {
  e.preventDefault();

  const value = e.target.value;
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
