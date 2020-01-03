import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

class Board extends React.Component {
  // When a cell is clicked
  handleClick = () => {}

  createTable = (rows, cols) => {
    const table = [];

    // Outer loop to create parent
    for (let r = 0; r < rows; r++) {
      const row = [];
      // Inner loop to create children
      for (let c = 0; c < cols; c++) {
        row.push(<td className="cell" />);
      }
      // Create the parent and add the children
      table.push(<tr>{row}</tr>);
    }
    return table;
  }

  render() {
    return (
      <table className="board">
        <tbody>
          {this.createTable(this.props.numRows, this.props.numCols)}
        </tbody>
      </table>
    );
  }
}

Board.propTypes = {
  numRows: PropTypes.number.isRequired,
  numCols: PropTypes.number.isRequired,
};

export default Board;
