import { useState, useEffect } from 'react';

import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { fetchMoviesId } from 'utils/requests';
import MovieDetailsContent from 'components/MovieDetailsContent/MovieDetailsContent';

export default function MovieDetails() {
  const navigate = useNavigate();
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

  const onGoBack = () => {
    if (!location.state) {
      navigate('/');
      return;
    }
    navigate(`${location.state.from.pathname}${location.state.from.search}`);
  };

  return (
    <div>
      <MovieDetailsContent
        movie={movie}
        onGoBack={onGoBack}
        locationValue={locationValue}
        movieId={movieId}
      />
    </div>
  );
}
