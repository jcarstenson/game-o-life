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
        <div className="row">
          <BoardContainer />
        </div>
        <div className="row">
          <ButtonGroup className="m-auto">
            <Button onClick={this.toggleSimulation}>{this.props.game.simulationIsRunning ? 'Stop' : 'Play' }</Button>
            <Button onClick={this.props.actions.stepGeneration} disabled={this.props.game.simulationIsRunning}>Step</Button>
          </ButtonGroup>
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
  }).isRequired,
};

export default Game;
