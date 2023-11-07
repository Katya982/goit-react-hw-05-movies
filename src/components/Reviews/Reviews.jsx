import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../service/config';
import { ReviewList } from "./Review.styled";
import { BsPersonCircle } from "react-icons/bs";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
    const movieReviews = async () => {
      try {
        const response = await fetchReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.error(error);
      }
    };

    movieReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 && (
        <div>
          <h2>Reviews</h2>
          <ReviewList>
            {reviews.map(review => (
              <li key={review.id}>
                <p><BsPersonCircle />{review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ReviewList>
        </div>
      )}
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie.</div>
      )}
    </>
  );
}

export default Reviews;
