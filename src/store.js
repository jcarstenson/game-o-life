import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash.throttle';
import rootReducer from './reducers';
import initialState from './initialState';
import { loadState, saveState } from './localStorage';


const middleware = [thunk];

let startingState = initialState;
const persistedState = loadState();

if (persistedState !== undefined) {
  startingState = Object.assign({}, initialState, persistedState);
}

// eslint-disable-next-line no-underscore-dangle
const store = applyMiddleware(...middleware)(createStore)(rootReducer, startingState, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f);

store.subscribe(throttle(() => saveState(store.getState()), 1000));

export default store;
