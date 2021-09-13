import genres from './Data/genresData';

// Функция парсит заголовок, дату и жанры для карточки галлереи - Тестовая функция, нужно доделать
export default function parseMoviesObject(array) {
  array.forEach(elem => {
    if (elem.title.length > 35) {
      elem.title = elem.title.slice(0, 35) + '...';
    }

    elem.release_date
      ? (elem.release_date = elem.release_date.slice(0, 4))
      : (elem.release_date = 'Unknown');
  });
  return array.map(el => ({
    ...el,
    genre_ids: el.genre_ids.length
      ? [
          ...genres.reduce(
            (acc, { id, name }) => (el.genre_ids.includes(+id) ? [...acc, name].slice(0, 2) : acc),
            [],
          ),
        ]
      : ['Unknown'],
  }));
}
