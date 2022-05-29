// import marinas from '../data/data.json';

/*-------- TYPES -------*/
export const LOAD_MARINAS = 'marina/loadMarinas';
export const ADD_MARINA = 'marina/addMarina';
// export const REMOVE_MARINA = 'marina/removeMarina';
// export const UPDATE_MARINA = 'marina/updateMarina'

/*-------- ACTIONS -------*/
const load = (marinas) => {
  return {
    type: LOAD_MARINAS,
    marinas
  };
};

const add = (marina) => {
  return {
    type: ADD_MARINA,
    marina
  };
};

// const remove = () => {
//     return {
//       type: REMOVE_MARINA,
//     };
// };

// const update = () => {
//     return {
//       type: UPDATE_MARINA,
//     };
// };

/*-------- SELECTORS -------*/

export const loadMarinas = () => async (dispatch) => {
    const response = await fetch('/api/marinas', {
      method: 'GET'
    });
    if (response.ok) {
        const marinas = await response.json();
        dispatch(load(marinas));
    }
};

export const addMarina = (marina) => async (dispatch) =>{
    const response = await fetch ('/api/marinas', {
        method: 'POST',
        headers: {"ContentType": 'application/json',
    },
        body: JSON.stringify(marina)
    })
    if(response.ok){
        const marina = await response.json();
        dispatch(add(marina));
        return marina;
    }
}



/*-------- REDUCER -------*/
const initialState = {};

const marinaReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MARINAS:
      const newMarina = {};
      action.marinas.marina.forEach(marina => {
          newMarina[marina.id] = marina
      })
      return { ...state,...newMarina};

    case ADD_MARINA:
      return { ...state, entries: [...state.entries, action.marina] };

    default:
      return state;
  }
};

export default marinaReducer;
