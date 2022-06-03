import { csrfFetch } from "./csrf";

const LIST_REVIEWS = 'review/listReviews';
const ADD_REVIEW = 'review/addReview';
const REMOVE_REVIEW = 'review/removeReview';
const UPDATE_REVIEW = 'review/updateReview'

const listReviews = list => ({
  type: LIST_REVIEWS,
  list
});
//eslint-disable-next-line
const addReview = details => ({
  type: ADD_REVIEW,
  details
})
//eslint-disable-next-line
const removeReview = id => ({
  type: REMOVE_REVIEW,
  id
});
//eslint-disable-next-line
const editReviews = updatedReview => ({
  type: UPDATE_REVIEW,
  updatedReview
});




export const getReviews = () => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews`);
    if (response.ok) {
        const list = await response.json();
        dispatch(listReviews(list));
    }
  };

  export const updateReviewDetails = (reviewDetails) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewDetails.id}`, {
      method: 'PUT',
      body: JSON.stringify(reviewDetails)
    })

    console.log(`response: ${response.data}`)

    if(response.ok){
    const updatedReview = await response.json()
    dispatch(editReviews(updatedReview))
    return updatedReview;
  }
};


export const deleteReview = (reviewId) => async dispatch => {
  console.log(reviewId)
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: 'DELETE',
    body: JSON.stringify({reviewId})
  })
  if(response.ok){
      const allReviews = await response.json();
      dispatch(removeReview(allReviews));
      return 'review deleted';
  }
};




const initialState = {};

const reviewReducer = (state = initialState, action) => {
  let newState;


  switch (action.type) {

    case LIST_REVIEWS: {
      newState={...state}
      action.list.forEach(review=>newState[review.id]=review)
      return newState
    }

    case UPDATE_REVIEW: {
      newState = {...state};
      newState = {...state, [action.updatedreview.id]:action.updatedreview}
      return newState
    }

    case REMOVE_REVIEW: {
      console.log("REDUCER IS HERE", action.id)
      newState = {...state}
      delete newState[action.id]
      return newState
    }

    default:
      return state;

  }

};

export default reviewReducer;
