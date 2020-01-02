import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];

export default applyMiddleware(...middleware)(createStore)(rootReducer, null, window.devToolsExtension ? window.devToolsExtension() : f => f);
