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
        <div className="row mt-4">
          <blockquote className="blockquote">
            <p>
              The universe of the <i>Game of Life</i> is an infinite, two-dimensional orthogonal grid of square <i>cells</i>,
              each of which is in one of two possible states, <i>alive</i> or <i>dead</i>, (or <i>populated</i> and <i>unpopulated</i>, respectively).
              Every cell interacts with its eight <i>neighbours</i>, which are the cells that are horizontally, vertically, or diagonally adjacent.
              At each step in time, the following transitions occur:
            </p>
            <ol>
              <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
              <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
              <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
              <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
            </ol>
            <footer className="blockquote-footer">
              <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" rel="noopener noreferrer">wikipedia</a>
            </footer>
          </blockquote>
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
