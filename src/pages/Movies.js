import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { API_KEY, BASE_URL, IMAGE_URL } from 'utils/constants';
import css from './Movies.module.css';

export function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    navigate(`/movies?search=${searchQuery}`);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      if (searchQuery) {
        try {
          const response = await fetch(
            `${BASE_URL}/search/movie?include_adult=false&language=en-US&query=${searchQuery}&api_key=${API_KEY}`
          );
          const data = await response.json();
          setMovies(data.results);
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      } else {
        setMovies([]);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  return (
    <div>
      <div className={css.searchContainer}>
        <form className={css.searchForm} onSubmit={handleSubmit}>
          <input
            className={css.searchFormInput}
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search for a movie..."
          />
          <button className={css.searchFormButton} type="submit">
            <span className={css.searchFormButtonLabel}>Search</span>
          </button>
        </form>
      </div>
      <div className={css.searchResults}>
        {movies.map(movie => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <div className={css.searchItem}>
              <img
                src={IMAGE_URL + movie.poster_path}
                alt={movie.title}
                width={400}
              />
              <h3 className={css.title}>
                {movie.title || movie.name || movie.original_title}
              </h3>
              <p className={css.rating}>
                <span>Rating: </span>
                {movie.vote_average.toFixed(1)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Movies;
