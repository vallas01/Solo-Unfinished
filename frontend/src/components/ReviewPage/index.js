import React, { useEffect, useState } from 'react';
import './ReviewPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getReviews, updateReviewDetails } from '../../store/reviewReducer'
// import { Redirect } from 'react-router-dom';
// import * as sessionActions from '../../store/session';

function ReviewPage() {
    const dispatch = useDispatch();
    const { reviewId } = useParams();
    const reviews = useSelector(state => state.review);
    const history = useHistory();

    const review = reviews[reviewId];

    console.log("Hello FROM ReviewPage")

    useEffect(() => {
        dispatch(getReviews());
    }, [dispatch])

// eslint-disable-next-line
    const [userId, setUserId] = useState('');
// eslint-disable-next-line
    const [businessId, setBusinessId] = useState('');
// eslint-disable-next-line
    const [rating, setRating] = useState('');
// eslint-disable-next-line
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            id: review.id,
            userId: review.userId,
            businessId: review.businessId,
            rating,
            content : review.content,
        };

        let editedReview = dispatch(updateReviewDetails(payload))

        if (editedReview) {
          // history.push(`/reviews/${editedReview.id}`);
          history.push(`/reviews`);
        }
      };

      useEffect(() =>{
        const errors = [];
        if (rating < 0 || rating > 5) errors.push("Ratings must be between 1 and 5");
        setErrors(errors);
      },[rating]);

    return (

        <div className='containerEdit'>

          <form className='editRating-form' onSubmit={handleSubmit}>
            <h2>Update the Star Rating</h2>

            <ul className='errors'>
              {errors.map(error=> (
                <li key={error}>
                  {error}
                </li>
              ))}
            </ul>

            <label>

              <input
                type="integer"
                name='rating'
                required
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />

            </label>

            <button className='edit-rating-btn' type="submit">Edit Stars</button>
          </form>

        </div>
    )
}

export default ReviewPage;
