import * as CONST from '../constants';
import initialState from '../initialState';
import boardReducer from './boardReducer';

function cellEvolve(cell, aliveNeighborCount) {
  // Rules:
  // 1. Any live cell with two or three neighbors survives.
  // 2. Any dead cell with three live neighbors becomes a live cell.
  // 3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.

  if (cell && (aliveNeighborCount === 2 || aliveNeighborCount === 3)) {
    return true;
  }

  if (!cell && aliveNeighborCount === 3) {
    return true;
  }

  return false;
}

function countAliveNeighbors(board, row, column) {
  const topRowNumber = (row - 1) < 0 ? row : row - 1;
  const bottomRowNumber = (row + 1) >= board.length ? row : row + 1;

  const leftColumnNumber = (column - 1) < 0 ? column : column - 1;
  const rightColumnNumber = (column + 1) >= board[0].length ? column : column + 1;

  const boundedCells = board.slice(topRowNumber, bottomRowNumber + 1)
    .map(rowArray => rowArray.slice(leftColumnNumber, rightColumnNumber + 1));

  return boundedCells.reduce(
    (count, rowArray) => count + rowArray.reduce(
      (rowCount, cell) => rowCount + Number(cell), 0), 0) - Number(board[row][column]);
}

function applyConwaysGameOfLifeRules(board) {
  return board.map((rowArray, row) =>
    rowArray.map((cell, column) =>
      cellEvolve(cell, countAliveNeighbors(board, row, column))));
}

function copyBoard(board) {
  return board.map(row => row.slice());
}

const gameReducer = (state = initialState.game, action) => {
  switch (action.type) {
    case CONST.STEP_GENERATION:
      return Object.assign({}, state, { board: applyConwaysGameOfLifeRules(state.board), simulationLastUpdate: Date.now() });
    case CONST.TOGGLE_SIMULATION:
      return Object.assign({}, state, { simulationIsRunning: !state.simulationIsRunning, simulationLastUpdate: Date.now() });
    case CONST.SAVE_BOARD:
      return Object.assign({}, state, { savedBoard: copyBoard(state.board) });
    case CONST.RESET_BOARD:
      return Object.assign({}, state, { board: copyBoard(state.savedBoard) });
    default:
      return Object.assign({}, state, { board: boardReducer(state.board, action) });
  }
};

export default gameReducer;
