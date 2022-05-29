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
const removeMarina = id => ({
  type: REMOVE_MARINA,
  id
});
const updateMarina = updatedMarina => ({
  type: UPDATE_MARINA,
  updatedMarina
});

/*-------- SELECTORS -------*/

export const listAllMarinas = () => async (dispatch) => {
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
    dispatch(updateMarina(updatedMarina))
    return updatedMarina;
  }
};

export const deleteMarina = (marinaId) => async dispatch => {
  const response = await csrfFetch(`/api/marinas/${marinaId}`, {
    method: 'DELETE',
    body: JSON.stringify({marinaId})
  })
  if(response.ok){
      const allMarinas = await response.json();
      dispatch(listAllMarinas(allMarinas));
      return 'marina deleted';
  }
};



/*-------- REDUCER -------*/
const initialState = {list:[], currentMarina:[]};

const marinaReducer = (state = initialState, action) => {
  let newState;
  
  switch (action.type) {

    case LIST_MARINAS: {
      const allMarinas = action.list;
      newState = {
        list: allMarinas,
        currentMarina:[]
      }
      return newState;
    }

    case ADD_MARINA:
      return { ...state, entries: [...state.entries, action.marina] };

    default:
      return state;
  }
};

export default marinaReducer;
