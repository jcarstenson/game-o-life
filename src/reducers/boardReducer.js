import * as CONST from '../constants';
import initialState from '../initialState';

function toggleBoardCell(board, row, column) {
  return board.map((rowArray, r) => {
    if (r !== row) {
      return rowArray;
    }

    return rowArray.map((cell, c) => {
      if (c !== column) {
        return cell;
      }

      return !cell;
    });
  });
}

function updateBoardCells(board, action) {
  return action.coordinateList.reduce(
    (startingBoard, coordinate) => {
      const cell = startingBoard[coordinate.row][coordinate.column];

      // If desired state matches current cell state, do nothing
      if (action.desiredCellState === cell) {
        return startingBoard;
      }

      return toggleBoardCell(startingBoard, coordinate.row, coordinate.column);
    },
    board);
}

const boardReducer = (state = initialState.game.board, action) => {
  switch (action.type) {
    case CONST.UPDATE_CELLS:
      return updateBoardCells(state, action);
    case CONST.CLEAR_BOARD:
      return new Array(state.length).fill(0).map(() => new Array(state[0].length).fill(false));
    default:
      return state;
  }
};

export default boardReducer;
