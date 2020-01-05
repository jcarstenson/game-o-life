import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import BoardContainer from '../containers/BoardContainer';

class Game extends React.Component {
  handleClick = () => this.props.actions.toggleGameState();

  render() {
    return (
      <div className="container pt-3">
        <BoardContainer simulationIsRunning={this.props.game.simulationIsRunning} />
        <Button onClick={this.handleClick}>Start/Stop</Button>
      </div>
    );
  }
}

Game.propTypes = {
  game: PropTypes.shape({
    simulationIsRunning: PropTypes.bool.isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    toggleGameState: PropTypes.func.isRequired,
  }).isRequired,
};

export default Game;
