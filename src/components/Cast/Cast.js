import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IMAGE_URL } from '../../utils/constants';
import css from './Cast.module.css';
import { fetchMovieCast } from 'utils/requests';
import Button from '../Button/Button';

export default function Cast() {
  const defaultImg =
    'https://www.altigen.com/wp-content/uploads/2017/09/wp-person-placeholder.png';
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(cast => {
      console.log(movieId);
      setCast(cast);
    });
  }, [movieId]);

  return (
    <>
      <Button />
      <ul className={css.actorsList}>
        {cast.map(el => (
          <li className={css.actorsListItem} key={el.id}>
            <img
              className={css.actorImg}
              src={el.profile_path ? IMAGE_URL + el.profile_path : defaultImg}
              alt={el.name}
            />
            <p>{el.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
