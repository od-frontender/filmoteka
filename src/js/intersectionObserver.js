import API from './apiService.js';
import refs from './refs';
// import addFilmsMarkup from './searchFilms';
import apiService from './app.js';
// import showGallery from './app.js';
// const apiService = new API();

const onEntry = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && apiService.query !== '') {
      console.log('Load more movies - TEST + Date.now()');
      apiService.fetchPopularFilms().then(res => {
        addFilmsMarkup(res);
        apiService.incrementPage();
      });
      // showGallery();
      // apiService.incrementPage();
    }
  });
}

const observer = new IntersectionObserver(onEntry, {
  rootMargin: '400px',
});
observer.observe(refs.sentinel);
