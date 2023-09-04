import { useState, useEffect } from 'react';
import { fetchMoviesId } from './utils/requests';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMoviesId(movieId).then(request => setReviews(request.results));
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(el => (
            // return console.log(el);
            <li key={el.id}>
              <p>
                <span>Author: </span>
                {el.author}
              </p>
              <p>{el.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h2>No reviews</h2>
      )}
    </>
  );
}
