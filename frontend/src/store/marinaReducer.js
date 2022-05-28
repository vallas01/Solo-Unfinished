import marinas from '../data/data.json';

const LOAD_MARINAS = 'marina/loadMarinas';
const ADD_MARINA = 'marina/addMarina';

export const loadMarinas = () => {
  return {
    type: LOAD_MARINAS,
    marinas
  };
};


export const addMarina = (marina) => {
  return {
    type: ADD_MARINA,
    marina
  };
};


const initialState = { entries: [], isLoading: true };

const marinaReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MARINAS:
      return { ...state, entries: [...action.marinas] };

    case ADD_MARINA:
      return { ...state, entries: [...state.entries, action.marina] };

    default:
      return state;
  }
};

export default marinaReducer;
