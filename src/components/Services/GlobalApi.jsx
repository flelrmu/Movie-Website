import axios from "axios";

const MovieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "a0f5e889d2655c451db7b1de39c0ef89";

const getTrendingVideos = () => {
  return axios.get(MovieBaseUrl + "/trending/all/day?api_key=" + api_key);
};

const getPopularMovies = (page = 1) => {
  return axios.get(MovieBaseUrl + "/movie/popular?api_key=" + api_key + "&page=" + page);
};

export default {
  getTrendingVideos,
  getPopularMovies,
};
