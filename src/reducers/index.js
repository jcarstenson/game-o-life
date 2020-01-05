import { combineReducers } from 'redux';
import board from './boardReducer';
import game from './gameReducer';

const rootReducer = combineReducers({
  game,
  board,
});

export default rootReducer;
