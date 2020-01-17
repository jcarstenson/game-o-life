import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button } from 'reactstrap';
import BoardContainer from '../containers/BoardContainer';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      simulationInterval: props.game.simulationIsRunning ? setInterval(this.checkUpdate, 25) : null,
    };
  }

  componentWillUnmount() {
    if (this.props.game.simulationIsRunning) {
      clearInterval(this.state.simulationInterval);
    }
  }

  toggleSimulation = () => {
    if (this.props.game.simulationIsRunning) {
      clearInterval(this.state.simulationInterval);
    } else {
      this.setState({ simulationInterval: setInterval(this.checkUpdate, 25) });
    }

    this.props.actions.toggleSimulation();
  }

  checkUpdate = () => {
    if (Date.now() >= this.props.game.simulationLastUpdate + this.props.game.simulationSpeedMilliseconds) {
      this.props.actions.stepGeneration();
    }
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
              <Button
                onClick={this.toggleSimulation}
                title={`${this.props.game.simulationIsRunning ? 'Stop' : 'Play'} the simulation`}
              >
                {this.props.game.simulationIsRunning ? 'Stop' : 'Play' }
              </Button>
              <Button
                onClick={this.props.actions.stepGeneration} disabled={this.props.game.simulationIsRunning}
                title="Step once through the simulation"
              >
                Step
              </Button>
            </ButtonGroup>
            <Button
              className="ml-2" onClick={this.props.actions.clearBoard} disabled={this.props.game.simulationIsRunning}
              title="Clear the board"
            >
                Clear
            </Button>

            <ButtonGroup className="ml-2">
              <Button
                onClick={this.props.actions.saveBoard} disabled={this.props.game.simulationIsRunning}
                title="Save the current board to reset later until the next time you save"
              >
                Save
              </Button>
              <Button
                onClick={this.props.actions.resetBoard} disabled={this.props.game.simulationIsRunning}
                title="Reset the board to a previously saved state"
              >
                Reset
              </Button>
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
    simulationLastUpdate: PropTypes.number,
  }).isRequired,
  actions: PropTypes.shape({
    stepGeneration: PropTypes.func.isRequired,
    toggleSimulation: PropTypes.func.isRequired,
    clearBoard: PropTypes.func.isRequired,
    saveBoard: PropTypes.func.isRequired,
    resetBoard: PropTypes.func.isRequired,
  }).isRequired,
};

export default Game;
