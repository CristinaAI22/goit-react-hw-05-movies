import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMoviesId } from 'utils/requests';
import MovieDetailsContent from 'components/MovieDetailsContent/MovieDetailsContent';

export default function MovieDetails() {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  let locationValue = location.state;
  if (location.state) {
    locationValue = location.state.from;
  }

  useEffect(() => {
    fetchMoviesId(movieId).then(movie => {
      setMovie(movie);
    });
  }, [movieId]);

  return (
    <>
      <div>
        <MovieDetailsContent
          movie={movie}
          locationValue={locationValue}
          movieId={movieId}
        />
      </div>
    </>
  );
}
