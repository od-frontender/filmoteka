import API from './apiService.js';
import incrementPage from './apiService.js';
import refs from './refs';
import showGallery from './app.js';
import apiService from './app.js';



  const onEntry = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && apiService.query !== '') {
        // console.log('Load more movies + Date.now());
        showGallery();
        incrementPage();
      }
    });
  };
  
  const observer = new IntersectionObserver(onEntry, {
    rootMargin: '400px',
  });
  observer.observe(refs.sentinel);
  