import * as CONST from '../constants';
import initialState from '../initialState';

const gameReducer = (state = initialState.game, action) => {
  switch (action.type) {
    case CONST.TOGGLE_SIMULATION:
      return Object.assign({}, state, { simulationIsRunning: !state.simulationIsRunning });
    default:
      return state;
  }
};

export default gameReducer;
