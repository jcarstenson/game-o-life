import { toggleCell } from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const toggleCellState = (r, c) => dispatch =>
  dispatch(toggleCell(r, c));
