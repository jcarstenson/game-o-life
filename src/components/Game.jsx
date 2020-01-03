import React from 'react';
import BoardContainer from '../containers/BoardContainer';

const Game = () => (
  <div className="container">
    <h1>Game of Life</h1>
    <BoardContainer numCols={20} numRows={20} />
  </div>
);

export default Game;
