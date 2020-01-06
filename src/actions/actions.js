import * as actionTypes from './actionTypes';

export const toggleCell = (r, c) => dispatch =>
  dispatch(actionTypes.toggleCell(r, c));

export const stepGeneration = () => dispactch =>
  dispactch(actionTypes.stepGeneration());
