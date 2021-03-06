import { csrfFetch } from "./csrf";

const LIST_MARINAS = 'marina/listMarinas';
const LIST_1_MARINA = 'marina/listOneMarina'
const ADD_MARINA = 'marina/addMarina';
const REMOVE_MARINA = 'marina/removeMarina';
const UPDATE_MARINA = 'marina/updateMarina'


const listMarinas = list => ({
  type: LIST_MARINAS,
  list
});
const listOneMarina = details => ({
  type: LIST_1_MARINA,
  details
});
const addMarinas = details => ({
  type: ADD_MARINA,
  details
})
//eslint-disable-next-line
const removeMarina = id => ({
  type: REMOVE_MARINA,
  id
});
const editMarinas = updatedMarina => ({
  type: UPDATE_MARINA,
  updatedMarina
});

/*-------- SELECTORS -------*/

export const getMarinas = () => async (dispatch) => {
    const response = await csrfFetch(`/api/marinas`);
    if (response.ok) {
        const list = await response.json();
        dispatch(listMarinas(list));
    }
};

export const getOneMarina = (marinaId) => async (dispatch) =>{
    const response = await csrfFetch (`/api/marinas/${marinaId}`);

    if(response.ok){
        const details = await response.json();
        dispatch(listOneMarina(details));
    }
};

export const createMarina = (details) => async dispatch => {
  const response = await csrfFetch('/api/marinas', {
    method: 'POST',
    body: JSON.stringify(details)
  })
  if(response.ok){
    const newMarina = await response.json()
    dispatch(addMarinas(newMarina))
    return newMarina;
  }
};

export const updateMarinaDetails = (marinaDetails) => async dispatch => {
  const response = await csrfFetch(`/api/marinas/${marinaDetails.id}`, {
    method: 'PUT',
    body: JSON.stringify(marinaDetails)
  })
  if(response.ok){
    const updatedMarina = await response.json()
    dispatch(editMarinas(updatedMarina))
    return updatedMarina;
  }
};

export const deleteMarina = (marinaId) => async dispatch => {
  console.log(marinaId)
  const response = await csrfFetch(`/api/marinas/${marinaId}`, {
    method: 'DELETE',
    body: JSON.stringify({marinaId})
  })
  if(response.ok){
      const allMarinas = await response.json();
      dispatch(removeMarina(allMarinas));
      return 'marina deleted';
  }
};



/*-------- REDUCER -------*/
const initialState = {};

const marinaReducer = (state = initialState, action) => {
  let newState;


  switch (action.type) {

    case LIST_MARINAS: {
      newState={...state}
      action.list.forEach(marina=>newState[marina.id]=marina)
      return newState
    }

    case ADD_MARINA: {
      newState = {...state};
      newState = {...state, [action.details.id]:action.details}
      return newState;
    }

    case UPDATE_MARINA: {
      newState = {...state};
      newState = {...state, [action.updatedMarina.id]:action.updatedMarina}
      return newState
    }

    case REMOVE_MARINA: {
      console.log("REDUCER IS HERE", action.id)
      newState = {...state}
      delete newState[action.id]
      return newState
    }

    case LIST_1_MARINA: {
      newState = {...state}
      newState.currentMarina = action.details
      return newState
    }


    default:
      return state;

  }

};

export default marinaReducer;
