import React from 'react';
import { NavLink } from 'react-router-dom';
import { IMAGE_URL } from 'utils/constants';
import css from '../MovieDetailsContent/MovieDetailsContent.module.css';

const MovieDetailsContent = ({ movie, onGoBack, movieId }) => {
  return (
    <>
      {movie && (
        <div className={css.mainContainer}>
          <div className={css.buttonContainer}>
            <button className={css.button} type="button" onClick={onGoBack}>
              <span>&larr;</span>GO BACK
            </button>
          </div>

          <div className={css.filmContainer}>
            <div className={css.imageContainer}>
              <img
                className={css.image}
                src={IMAGE_URL + movie.poster_path}
                alt={movie.title}
              />
            </div>

            <div className={css.detailsContainer}>
              <h2 className={css.title}>
                {movie.title || movie.name || movie.original_title}
              </h2>
              <p className={css.text}>
                <span className={css.textCategory}>Rating: </span>
                {movie.vote_average.toFixed(1)}
              </p>
              <p className={css.text}>
                <span className={css.textCategory}>Overview: </span>
                {movie.overview}
              </p>
              <p className={css.text}>
                <span className={css.textCategory}>Genres: </span>
                {movie.genres.map(genre => genre.name).join(' ')}
              </p>
              <div className={css.additionalContainer}>
                <h3 className={css.title}>Additional information</h3>

                <nav className={css.navContainer}>
                  <NavLink
                    className={css.navCategory}
                    to={`/movies/${movieId}/cast`}
                  >
                    Cast
                  </NavLink>
                  <NavLink
                    className={css.navCategory}
                    to={`/movies/${movieId}/reviews`}
                  >
                    Reviews
                  </NavLink>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetailsContent;
