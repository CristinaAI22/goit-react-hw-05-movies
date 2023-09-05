import { Suspense, lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { IMAGE_URL } from 'utils/constants';
import css from '../MovieDetailsContent/MovieDetailsContent.module.css';
import Loader from 'utils/loader';

const Cast = lazy(() => import('../Cast'));
const Reviews = lazy(() => import('../Reviews'));

const MovieDetailsContent = ({ movie, onGoBack, movieId, locationValue }) => {
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
            </div>
          </div>
          <div className={css.additionalContainer}>
            <h3 className={css.title}>Additional information</h3>

            <nav>
              <NavLink
                to={{
                  pathname: `/movies/${movieId}/cast`,
                  state: { from: locationValue },
                }}
              >
                Cast
              </NavLink>

              <NavLink
                to={{
                  pathname: `/movies/${movieId}/reviews`,
                  state: { from: locationValue },
                }}
              >
                Reviews
              </NavLink>
            </nav>

            <Suspense fallback={<Loader />}>
              <Routes>
                <Route
                  path={`/movies/:movieId/cast`}
                  element={<Cast movieId={movieId} />}
                />

                <Route
                  path={`/movies/:movieID/reviews`}
                  element={<Reviews movieId={movieId} />}
                />
              </Routes>
            </Suspense>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetailsContent;
