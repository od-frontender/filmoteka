import refs from './refs';
import API from './apiService';
import galleryCard from '../templates/galleryCard.hbs'

const apiService = new API();

refs.searchForm.addEventListener('input', onSearchFilms);




function addFilmsMarkup(data) {
    if (data.length !== 0) {
        const markup = galleryCard(data);
        refs.gallery.insertAdjacentHTML('beforeend', markup);
    }
}

function onSearchFilms(evt) {
    evt.preventDefault();

    const value = evt.target.value;
    console.log(value);
    // apiService.searchQuery = value;
    refs.gallery.innerHTML = '';
    apiService.fetchFilmsToId(value).then(addFilmsMarkup);
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