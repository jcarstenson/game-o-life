import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import initialState from './initialState';

const middleware = [thunk];

// eslint-disable-next-line no-underscore-dangle
export default applyMiddleware(...middleware)(createStore)(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f);
