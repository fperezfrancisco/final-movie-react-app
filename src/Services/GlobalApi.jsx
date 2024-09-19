import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "5d78ed64237414a6aafcbdb053b772a0";
const movieKeyWorkBase =
  "https://api.themoviedb.org/3?api_key=5d78ed64237414a6aafcbdb053b772a0/discover/movie?&with_keywords=";

//search movies using omdb api
async function searchMovieTitle(movieTitle) {
  //use omdb api to get movies
  try {
    let searchUrl = `https://www.omdbapi.com/?apikey=52703dd9&s=${movieTitle}`;
    console.log(searchUrl);
    return await axios.get(searchUrl);
  } catch (error) {
    console.error(error);
    return alert("Search movies failed with an error.");
  }
}

async function searchMovieId(id) {
  try {
    let searchUrl = `https://www.omdbapi.com/?apikey=52703dd9&i=${id}`;
    console.log(searchUrl);
    return await axios.get(searchUrl);
  } catch (error) {
    console.log(error);
    return alert("Error fetching movie.");
  }
}

export default {
  searchMovieTitle,
  searchMovieId,
};
