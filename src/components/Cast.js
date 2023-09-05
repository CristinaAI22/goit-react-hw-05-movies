import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { IMAGE_URL } from '../utils/constants';
import css from './Cast.module.css';
import { fetchMovieCast } from 'utils/requests';

export default function Cast(movieId) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(cast => {
      console.log(movieId);
      setCast(cast);
    });
  }, [movieId]);

  return true(
    <ul className={css.actorsList}>
      {cast.map(el => (
        <li key={el.id}>
          <img src={IMAGE_URL + el.profile_path} alt={el.name} />
          <p>{el.name}</p>
        </li>
      ))}
    </ul>
  );
}
