import refs from './refs';
import API from './apiService';
import galleryCard from '../templates/galleryCard.hbs';
import showGallery from './app';
import loadSpinner from './loader';
var debounce = require('lodash.debounce');



const apiService = new API();

<<<<<<< Updated upstream
refs.searchForm.addEventListener('input', debounce(onSearchFilms, 1000));
=======
refs.searchForm.addEventListener('submit', onSearchFilms);
>>>>>>> Stashed changes

loadSpinner();

function onSearchFilms(e) {
  e.preventDefault();

<<<<<<< Updated upstream
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
=======
// function addFilmsMarkup(data) {
//     if (data.length !== 0) {
//         const markup = galleryCard(data);
//         refs.gallery.insertAdjacentHTML('beforeend', markup);
//     }
// }

function onSearchFilms(evt) {
    evt.preventDefault();

    const value = evt.currentTarget.elements.query.value;
    console.log(value);
    refs.gallery.innerHTML = '';
    apiService.fetchFilmsToId(value).then(addFilmsMarkup);
>>>>>>> Stashed changes
}
