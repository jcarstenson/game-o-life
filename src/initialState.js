import * as CONST from './constants';

const initialState = {
  board: {
    numCols: CONST.NUM_COLS,
    numRows: CONST.NUM_ROWS,
    cells: new Array(CONST.NUM_ROWS).fill(0).map(() => new Array(CONST.NUM_COLS).fill(false)),
  },
  // game: {
  //   isRunning: false,
  // },
};

export default initialState;
