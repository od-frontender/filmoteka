// забрал функцию (fetchAllInfoAboutFilm) с apiServie.js
// которая делает запрос на получение полной информации о фильме

import API from './apiService.js';
// нужно сделать export default fetchAllInfoAboutFilm на apiServie.js
const apiService = new API();

function addIntoWatch() {
  localStorage.setItem('Queue', JSON.stringify(apiService.fetchAllInfoAboutFilm)); // <-- с apiServie.js
  localStorage.setItem('Watched', JSON.stringify(apiService.fetchAllInfoAboutFilm)); //<-- с apiServie.js
}
addIntoWatch();
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
