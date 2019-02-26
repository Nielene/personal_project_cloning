import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//i changed the routing in './index.js'
import rootReducer from './reducers/index.js'
//i added line 5:
import initialState from './reducers/index.js'


const intialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;
