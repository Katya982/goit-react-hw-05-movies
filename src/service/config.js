import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '4cb470234e4a9a78e40f288ec25b93f9';

const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day`, params);
  return response.data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}`, params);
  return response.data;
};

export const HandleMovieSearch = async (movieName) => {
  const response = await axios.get(`/search/movie?query=${movieName}`, params);
  return response.data.results;
}

export const fetchCast = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits?`, params);
  return response.data.cast;
};

export const fetchReviews = async movieID => {
  const response = await axios.get(`/movie/${movieID}/reviews?`, params);
  return response.data.results;
}