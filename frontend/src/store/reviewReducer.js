import { csrfFetch } from "./csrf";

const LIST_REVIEWS = 'marina/listReviews';
const ADD_REVIEW = 'marina/addReview';
const REMOVE_REVIEW = 'marina/removeReview';
const UPDATE_REVIEW = 'marina/updateReview'

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
const removeMarina = id => ({
  type: REMOVE_REVIEW,
  id
});
//eslint-disable-next-line
const editReviews = updatedMarina => ({
  type: UPDATE_REVIEW,
  updatedMarina
});




export const getReviews = () => async (dispatch) => {
    const response = await csrfFetch(`/api/marinas`);
    if (response.ok) {
        const list = await response.json();
        dispatch(listReviews(list));
    }
    console.log(`response: ${response.data}`)
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



    default:
      return state;

  }

};

export default reviewReducer;
