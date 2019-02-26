import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//i changed the routing in './index.js'
import rootReducer from './reducers/index.js'


const intialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
