import * as CONST from './constants';

const initialState = {
  board: {
    numCols: CONST.NUM_COLS,
    numRows: CONST.NUM_ROWS,

    // initialize a 2d bool array as all false (dead)
    cells: new Array(CONST.NUM_ROWS).fill(0)
      .map(() => new Array(CONST.NUM_COLS).fill(false)),
  },
  game: {
    simulationIsRunning: false,
  },
};

export default initialState;
