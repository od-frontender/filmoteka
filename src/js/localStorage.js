import API from './apiService.js';

const apiService = new API();

export default class LocalStorageUtil {
  constructor() {}

  getQueue() {
    const movieStorageId = localStorage.getItem('Queue');
    if (movieStorageId !== null) {
      return JSON.parse(movieStorageId);
    }
    return [];
  }

  getWatched() {
    const movieStorageId = localStorage.getItem('Watched');
    if (movieStorageId !== null) {
      return JSON.parse(movieStorageId);
    }
    return [];
  }

  putQueue(id) {
    let movie = getQueue();
    const index = movie.indexOf(id);

    if (index === -1) {
      index.push(id);
    } else {
      movie.splice(index, 1);
    }

    localStorage.setItem('Queue', JSON.stringify(apiService.fetchAllInfoAboutFilm));

    return movie;
  }

  putWatched(id) {
    let movie = getWatched();
    const index = movie.indexOf(id);

    if (index === -1) {
      index.push(id);
    } else {
      movie.splice(index, 1);
    }

    localStorage.setItem('Watched', JSON.stringify(apiService.fetchAllInfoAboutFilm));

    return movie;
  }
}

// const localStorageUtil = new LocalStorage();

// localStorageUtil.putWatched();

// ================================================== //

// function addIntoWatched() {
//   localStorage.setItem('Watched', JSON.stringify(apiService.fetchAllInfoAboutFilm));
// }
// function addIntoQueue() {
//   localStorage.setItem('Queue', JSON.stringify(apiService.fetchAllInfoAboutFilm));
// }
// addIntoWatched();
// addIntoQueue();

// function getQueue() {
//   const movieStorageId = localStorage.getItem('Queue');
//   if (movieStorageId !== null) {
//     return JSON.parse(movieStorageId);
//   }
//   return [];
// }

// получаем фильм в ПРОСМОТРЕННЕ (Watched)
// function getWatched() {
//   const movieStorageId = localStorage.getItem('Watched');
//   if (movieStorageId !== null) {
//     return JSON.parse(movieStorageId);
//   }
//   return [];
// }

// добавляем фильм в локальное хранилище
// function putQueue(id) {
//   let movie = getQueue();
//   const index = movie.indexOf(id);

//   if (index === -1) {
//     index.push(id);
//   } else {
//     movie.splice(index, 1);
//   }

//   localStorage.setItem('Queue', JSON.stringify(apiService.fetchAllInfoAboutFilm));

//   return movie;
// }

// добавляем фильм в локальное хранилище
// function putWatched(id) {
//   let movie = getWatched();
//   const index = movie.indexOf(id);

//   if (index === -1) {
//     index.push(id);
//   } else {
//     movie.splice(index, 1);
//   }

//   localStorage.setItem('Watched', JSON.stringify(apiService.fetchAllInfoAboutFilm));

//   return movie;
// }
