import * as CONST from './constants';

const initialState = {
  game: {
    // initialize a 2d bool array as all false (dead)
    board: new Array(CONST.NUM_ROWS).fill(0).map(() => new Array(CONST.NUM_COLS).fill(false)),

    simulationIsRunning: false,
    simulationSpeedMilliseconds: 5,
  },
};

export default initialState;
