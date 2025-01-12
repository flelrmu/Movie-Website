import axios from "axios";

const MovieBaseUrl = "https://api.themoviedb.org/3";
const ReqresBaseUrl = "https://reqres.in/api";
const api_key = "a0f5e889d2655c451db7b1de39c0ef89";

const loginUser = (email, password) => {
  return axios.post(`${ReqresBaseUrl}/login`, { email, password });
};

const getTrendingVideos = () => {
  return axios.get(MovieBaseUrl + "/trending/all/day?api_key=" + api_key);
};

const getPopularMovies = (page = 1) => {
  return axios.get(MovieBaseUrl + "/movie/popular?api_key=" + api_key + "&page=" + page);
};

const getMoviesByGenre = (genreId, page = 1) => {
  return axios.get(MovieBaseUrl + `/discover/movie?api_key=${api_key}&with_genres=${genreId}&page=${page}`);
};

const getShowsByGenre = (genreId, page = 1) => {
  return axios.get(MovieBaseUrl + `/discover/tv?api_key=${api_key}&with_genres=${genreId}&page=${page}`);
};

const getUpcomingMovies = (page = 1) => {
  return axios.get(MovieBaseUrl + `/movie/upcoming?api_key=${api_key}&page=${page}`);
};

const getTopRatedMovies = (page = 1) => {
  return axios.get(MovieBaseUrl + `/movie/top_rated?api_key=${api_key}&page=${page}`);
};

const getMovieDetails = (movieId) => {
  return axios.get(`${MovieBaseUrl}/movie/${movieId}?api_key=${api_key}`);
};

const getMovieRecommendations = (movieId) => {
  return axios.get(`${MovieBaseUrl}/movie/${movieId}/recommendations?api_key=${api_key}`);
};


export default {
  loginUser,
  getTrendingVideos,
  getPopularMovies,
  getMoviesByGenre,
  getUpcomingMovies,
  getTopRatedMovies,
  getMovieDetails,
  getMovieRecommendations,
  getShowsByGenre,
};
