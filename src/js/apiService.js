const API_KEY = 'e942a76391bf600d8ff506ebfde7cc4d';

function fetchFilms() {
  return fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`).then(res =>
    res.json(),
  );
}
export default fetchFilms;
