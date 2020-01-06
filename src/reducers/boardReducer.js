import * as CONST from '../constants';
import initialState from '../initialState';

function toggleBoardCell(board, action) {
  return board.map((rowArray, row) => {
    if (row !== action.row) {
      return rowArray;
    }

    return rowArray.map((cell, column) => {
      if (column !== action.column) {
        return cell;
      }

      return !cell;
    });
  });
}

const boardReducer = (state = initialState.game.board, action) => {
  switch (action.type) {
    case CONST.TOGGLE_CELL:
      return toggleBoardCell(state, action);
    default:
      return state;
  }
};

export default boardReducer;
