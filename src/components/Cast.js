import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IMAGE_URL } from '../utils/constants';
import css from './Cast.module.css';
import { Link } from 'react-router-dom';
import { fetchMovieCast } from 'utils/requests';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const movieCast = async () => {
      try {
        const response = await fetchMovieCast(movieId);
        setCast(response);
      } catch (error) {
        console.error(error);
      }
    };

    movieCast();
  }, [movieId]);

  return (
    <ul className={css.actorsList}>
      <h2>cast</h2>
      {cast.map(el => (
        <Link to={`/movies/${movieId}/cast`} key={movieId}>
          <li key={el.id}>
            <img src={IMAGE_URL + el.profile_path} alt={el.name} />
            <p>{el.name}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}
