import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//he had './reducers.js' without needing /index.js
import rootReducer from './reducers'


const intialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
