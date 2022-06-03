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

    useEffect(() => {
        dispatch(getMarinas());
    }, [dispatch])

// eslint-disable-next-line
    const [userId, setUserId] = useState('');
// eslint-disable-next-line
    const [businessId, setBusinessId] = useState('');
// eslint-disable-next-line
    const [rating, setRating] = useState('');
// eslint-disable-next-line
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            userId: review.userId,
            businessId: review.businessId,
            rating,
            content : review.content,
            cost,
        };

        let editedMarina = dispatch(updateReviewDetails(payload))

        if (editedMarina) {
          history.push(`/reviews/${editedMarina.id}`);
        }
      };

    return (
        <div className='containerEdit'>

          <form className='edit-form' onSubmit={handleSubmit}>
            <h2>Update the Star Rating</h2>

            <label>

              <input
                type="integer"
                name='rating'
                required
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />

            </label>

            <button className='edit-marina-btn' type="submit">Edit Cost</button>
          </form>

        </div>
    )
}

export default ReviewPage
