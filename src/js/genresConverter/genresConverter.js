import genresData from './genresData.json';
import apiService from '../apiService.js'
 
//Жанр конвертер для карточки
function genresConvertor (id) {
  let ganreName = [];
  // genre_ids = 
  if (genresData[id] === genre_ids){
    ganreName.push(genresData[id].name)
}

    return genresData[id].name
}

// console.log(genresData[4].name); //Crime
console.log(genresConvertor(4))
