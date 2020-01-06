import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import BoardContainer from '../containers/BoardContainer';

// eslint-disable-next-line react/prefer-stateless-function
class Game extends React.Component {
  render() {
    return (
      <div className="container pt-3">
        <BoardContainer />
        <Button onClick={this.props.actions.stepGeneration}>Step</Button>
      </div>
    );
  }
}

Game.propTypes = {
  actions: PropTypes.shape({
    stepGeneration: PropTypes.func.isRequired,
  }).isRequired,
};

export default Game;
