import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

class Board extends React.Component {
  // When a cell is clicked
  handleClick = () => {}

  createTable = (rows, cols) => {
    const table = [];

    // Outer loop to create rows
    for (let r = 0; r < rows; r++) {
      const row = [];
      // Inner loop to create cells
      for (let c = 0; c < cols; c++) {
        row.push(<Cell isAlive={false} />);
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
          {this.createTable(this.props.board.numRows, this.props.board.numCols)}
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
