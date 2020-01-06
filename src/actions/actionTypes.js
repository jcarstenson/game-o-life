import * as CONST from '../constants';

export const toggleCell = (row, column) => ({
  type: CONST.TOGGLE_CELL,
  row,
  column,
});

export const stepGeneration = () => ({
  type: CONST.STEP_GENERATION,
});

export const toggleSimulation = () => ({
  type: CONST.TOGGLE_SIMULATION,
});
