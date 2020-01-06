import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button } from 'reactstrap';
import BoardContainer from '../containers/BoardContainer';

const Game = props => (
  <div className="container pt-3">
    <BoardContainer />
    <ButtonGroup>
      <Button onClick={props.actions.toggleSimulation}>{props.game.simulationIsRunning ? 'Stop' : 'Play' }</Button>
      <Button onClick={props.actions.stepGeneration} disabled={props.game.simulationIsRunning}>Step</Button>
    </ButtonGroup>

  </div>
);

Game.propTypes = {
  game: PropTypes.shape({
    simulationIsRunning: PropTypes.bool.isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    stepGeneration: PropTypes.func.isRequired,
    toggleSimulation: PropTypes.func.isRequired,
  }).isRequired,
};

export default Game;
