import API from './apiService.js';
import refs from './refs.js;';

const apiService = new API();

refs.modalButtonWatched.addEventListener('click', addIntoWatched);
refs.modalButtonQueue.addEventListener('click', addIntoQueue);

function addIntoWatched() {
  localStorage.setItem('Watched', JSON.stringify(apiService.fetchAllInfoAboutFilm));
}
function addIntoQueue() {
  localStorage.setItem('Queue', JSON.stringify(apiService.fetchAllInfoAboutFilm));
}
addIntoWatched();
addIntoQueue();

// получаем фильм в ОЧЕРЕДЬ (Queue)
function getQueue() {
  const movieStorageId = localStorage.getItem('Queue');
  if (movieStorageId !== null) {
    return JSON.parse(movieStorageId);
  }
  return [];
}

// получаем фильм в ПРОСМОТРЕННЕ (Watched)
function getWatched() {
  const movieStorageId = localStorage.getItem('Watched');
  if (movieStorageId !== null) {
    return JSON.parse(movieStorageId);
  }
  return [];
}

// добавляем фильм в локальное хранилище
function putQueue(id) {
  let movie = getQueue();
  const index = movie.indexOf(id);

  if (index === -1) {
    index.push(id);
  } else {
    movie.splice(index, 1);
  }
  return movie;
}

// добавляем фильм в локальное хранилище
function putWatched(id) {
  let movie = getWatched();
  const index = movie.indexOf(id);

  if (index === -1) {
    index.push(id);
  } else {
    movie.splice(index, 1);
  }
  return movie;
}
