import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

class Board extends React.Component {
  handleClick = (r, c) =>
    () => {
      if (!this.props.simulationIsRunning) {
        this.props.actions.toggleCellState(r, c);
      }
    };

  createTable = () => {
    const rows = this.props.board.numRows;
    const cols = this.props.board.numCols;

    const table = [];

    // Create rows
    for (let r = 0; r < rows; r++) {
      const row = [];
      // Create cells
      for (let c = 0; c < cols; c++) {
        row.push(<Cell key={`${r},${c}`} isAlive={this.props.board.cells[r][c]} handleClick={this.handleClick(r, c)} />);
      }

      // Create the parent and add the children
      table.push(<tr key={`${r}`}>{row}</tr>);
    }

    return table;
  }

  render() {
    return (
      <table className="board m-auto">
        <tbody>
          {this.createTable()}
        </tbody>
      </table>
    );
  }
}

Board.propTypes = {
  simulationIsRunning: PropTypes.bool.isRequired,
  board: PropTypes.shape({
    numRows: PropTypes.number,
    numCols: PropTypes.number,
    cells: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)),
  }).isRequired,
  actions: PropTypes.shape({
    toggleCellState: PropTypes.func.isRequired,
    stepCellGeneration: PropTypes.func.isRequired,
  }).isRequired,
};

export default Board;
