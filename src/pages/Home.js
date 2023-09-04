import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'utils/requests';
import TrendingMoviesGallery from '../components/TrendingMoviesGallery/TrendingMoviesGallery';
import css from './Home.module.css';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(request => setMovies(request.results));
  }, []);

  return (
    <div className={css.container}>
      <div className={css.breakLineContainer}>
        <hr className={css.breakLine}></hr>
      </div>
      <h1 className={css.title}>Trending now</h1>
      <TrendingMoviesGallery movies={movies} />
    </div>
  );
}
