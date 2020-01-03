import React from 'react';
import BoardContainer from '../containers/BoardContainer';

const Game = () => (
  <div className="container pt-3">
    <BoardContainer numCols={20} numRows={20} />
  </div>
);

export default Game;
