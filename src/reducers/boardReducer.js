import * as CONST from '../constants';
import initialState from '../initialState';

function toggleArrayItem(array, action) {
  const arr = array.map((row, r) => {
    if (r !== action.row) {
      return row;
    }

    return row.map((value, c) => {
      if (c !== action.column) {
        return value;
      }

      return !value;
    });
  });

  return arr;
}

const boardReducer = (state = initialState.board, action) => {
  switch (action.type) {
    case CONST.TOGGLE_CELL:
      return Object.assign({},
        state,
        {
          cells: toggleArrayItem(state.cells, action),
        });
    default:
      return state;
  }
};

export default boardReducer;
