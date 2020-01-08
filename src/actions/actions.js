import * as actionTypes from './actionTypes';

export const updateCells = (desiredCellState, coordinateList) => dispatch =>
  dispatch(actionTypes.updateCells(desiredCellState, coordinateList));

export const stepGeneration = () => dispatch =>
  dispatch(actionTypes.stepGeneration());

export const toggleSimulation = () => dispatch =>
  dispatch(actionTypes.toggleSimulation());

export const clearBoard = () => dispatch =>
  dispatch(actionTypes.clearBoard());
