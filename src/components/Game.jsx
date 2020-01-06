import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button } from 'reactstrap';
import BoardContainer from '../containers/BoardContainer';

class Game extends React.Component {
  state = {
    simulationTimeout: null,
  }

  componentDidMount() {
    if (this.props.game.simulationIsRunning) {
      this.state.simulationTimeout = setTimeout(this.props.actions.stepGeneration, this.props.game.simulationSpeedMilliseconds);
    }
  }

  componentDidUpdate() {
    if (this.props.game.simulationIsRunning) {
      this.state.simulationTimeout = setTimeout(this.props.actions.stepGeneration, this.props.game.simulationSpeedMilliseconds);
    }
  }

  toggleSimulation = () => {
    if (this.props.game.simulationIsRunning) {
      clearTimeout(this.state.simulationTimeout);
    }

    this.props.actions.toggleSimulation();
  }

  render() {
    return (
      <div className="container pt-3">
        <h1 className="text-center">Game o&apos; Life</h1>
        <div className="row">
          <BoardContainer />
        </div>
        <div className="row">
          <div className="m-auto">
            <ButtonGroup>
              <Button onClick={this.toggleSimulation}>{this.props.game.simulationIsRunning ? 'Stop' : 'Play' }</Button>
              <Button onClick={this.props.actions.stepGeneration} disabled={this.props.game.simulationIsRunning}>Step</Button>
            </ButtonGroup>
            <ButtonGroup className="ml-2">
              <Button onClick={this.props.actions.clearBoard} disabled={this.props.game.simulationIsRunning}>Clear</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  game: PropTypes.shape({
    simulationIsRunning: PropTypes.bool.isRequired,
    simulationSpeedMilliseconds: PropTypes.number.isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    stepGeneration: PropTypes.func.isRequired,
    toggleSimulation: PropTypes.func.isRequired,
    clearBoard: PropTypes.func.isRequired,
  }).isRequired,
};

export default Game;
