import axios from 'axios';
import Notiflix from 'notiflix';
import { API_KEY, BASE_URL } from './constants';

export async function fetchTrendingMovies() {
  try {
    const res = await axios.get(
      `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
    );
    const data = res.data;
    return data;
  } catch (error) {
    Notiflix.Notify.failure(
      'Failed to fetch trending movies. Please try again later.'
    );
    throw error;
  }
}

export async function fetchMoviesId(movieId) {
  try {
    const res = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    const data = res.data;
    return data;
  } catch (error) {
    Notiflix.Notify.failure(
      'Failed to fetch movie details. Please try again later.'
    );
    throw error;
  }
}
export async function fetchMovieSearch(query) {
  try {
    const res = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
    );
    return res.data;
  } catch (error) {
    Notiflix.Notify.failure(
      'Failed to fetch movie search results. Please try again later.'
    );
    throw error;
  }
}
export const fetchMovieCast = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

export async function fetchMovieReviews(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return await response.json();
}
