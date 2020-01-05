import { toggleCell } from './actionTypes';
import * as actionTypes from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const toggleCellState = (r, c) => dispatch =>
  dispatch(toggleCell(r, c));
  dispatch(actionTypes.toggleCell(r, c));

export const toggleSimulation = () => dispatch =>
  dispatch(actionTypes.toggleSimulation());

