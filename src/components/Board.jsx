import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

class Board extends React.Component {
  handleCellClick = (r, c) => () => {
    this.props.actions.toggleCell(r, c);
  };

  createTable = () => {
    const rows = this.props.numRows;
    const cols = this.props.numCols;

    const table = [];

    // Create rows
    for (let r = 0; r < rows; r++) {
      const row = [];
      // Create cells
      for (let c = 0; c < cols; c++) {
        row.push(<Cell key={`${r},${c}`} isAlive={this.props.board[r][c]} handleClick={this.handleCellClick(r, c)} />);
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
  numRows: PropTypes.number.isRequired,
  numCols: PropTypes.number.isRequired,
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)).isRequired,
  actions: PropTypes.shape({
    toggleCell: PropTypes.func.isRequired,
  }).isRequired,
};

export default Board;
