import { useState, useEffect } from "react";
import { fetchMovieReviews } from "../../API/API";

import s from "./Reviews.module.css";

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieId).then((response) => {
      if (response.results.length === 0) return;
      setReviews(response.results);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {reviews ? (
        <ul className={s.reviewList}>
          {reviews.map((review) => (
            <li key={review.id}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no reviews.</p>
      )}
    </>
  );
}
