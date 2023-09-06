import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../utils/requests';
import { useParams } from 'react-router-dom';
import Button from '../Button/Button';
import css from './Reviews.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(request => setReviews(request.results));
  }, [movieId]);

  return (
    <>
      <Button />
      {reviews.length > 0 ? (
        <ul className={css.reviewsList}>
          {reviews.map(el => (
            <li className={css.reviewsListItem} key={el.id}>
              <p>
                <span className={css.highlightText}>Author: </span>
                {el.author}
              </p>
              <p>{el.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h3 className={css.highlightText}> No reviews</h3>
      )}
    </>
  );
}
