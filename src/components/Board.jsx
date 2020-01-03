import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

class Board extends React.Component {
  // When a cell is clicked
  handleClick = () => {}

  createTable = () => {
    const rows = this.props.board.numRows;
    const cols = this.props.board.numCols;

    const table = [];

    // Outer loop to create rows
    for (let r = 0; r < rows; r++) {
      const row = [];
      // Inner loop to create cells
      for (let c = 0; c < cols; c++) {
        row.push(<Cell isAlive={this.props.board.cells[r][c]} />);
      }
      // Create the parent and add the children
      table.push(<tr>{row}</tr>);
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
  board: PropTypes.shape({
    numRows: PropTypes.number,
    numCols: PropTypes.number,
    cells: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)),
  }),
};

Board.defaultProps = {
  board: {},
};

export default Board;
