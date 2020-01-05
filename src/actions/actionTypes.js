import * as CONST from '../constants';

// eslint-disable-next-line import/prefer-default-export
export const toggleCell = (row, column) => ({
  type: CONST.TOGGLE_CELL,
  row,
  column,
});

export const toggleSimulation = () => ({
  type: CONST.TOGGLE_SIMULATION,
});
