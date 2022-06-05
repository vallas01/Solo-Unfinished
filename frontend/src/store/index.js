import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from './session';
import marinaReducer from "./marinaReducer";
import reviewReducer from "./reviewReducer";

//ORIGINAL CODE *********
// const rootReducer = combineReducers({
//   session: sessionReducer,
//   marina: marinaReducer,
//   review: reviewReducer,
// });

//NEW CODE ******
const appReducer = combineReducers({
  session: sessionReducer,
  marina: marinaReducer,
  review: reviewReducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'REMOVE_USER') {
    const { routing } = state
    state = { routing } 
  }

  return appReducer(state, action)
}
//****************/


let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
