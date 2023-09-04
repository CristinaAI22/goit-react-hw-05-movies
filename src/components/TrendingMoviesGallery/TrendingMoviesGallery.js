import { Link, useLocation } from 'react-router-dom';
import { IMAGE_URL } from 'utils/constants';
import css from '../TrendingMoviesGallery/TrendingMoviesGallery.module.css';

const TrendingMoviesGallery = ({ movies }) => {
  const location = useLocation();
  return (
    <div className={css.container}>
      <ul className={css.trendingList}>
        {movies.map(movie => (
          <li className={css.trendingListItem} key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: location },
              }}
            >
              <img
                src={IMAGE_URL + movie.poster_path}
                alt={movie.title}
                width={450}
              />
              <p className={css.title}>
                {movie.title || movie.name || movie.original_title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TrendingMoviesGallery;
