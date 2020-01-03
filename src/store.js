import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import initialState from './initialState';

const middleware = [thunk];

export default applyMiddleware(...middleware)(createStore)(rootReducer, initialState, window.devToolsExtension ? window.devToolsExtension() : f => f);
