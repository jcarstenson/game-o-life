import * as CONST from './constants';

const initialState = {
  game: {
    numCols: CONST.NUM_COLS,
    numRows: CONST.NUM_ROWS,

    // initialize a 2d bool array as all false (dead)
    board: new Array(CONST.NUM_ROWS).fill(0).map(() => new Array(CONST.NUM_COLS).fill(false)),

    simulationIsRunning: false,
    simulationSpeedMilliseconds: 100,
  },
};

export default initialState;
