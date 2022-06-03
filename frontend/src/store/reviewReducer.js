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
      newState = {...state, [action.updatedMarina.id]:action.updatedMarina}
      return newState
    }



    default:
      return state;

  }

};

export default reviewReducer;
