import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

class Board extends React.Component {
  state = {
    isMouseDown: false,
  }

  createTable = () => {
    const rows = this.props.numRows;
    const cols = this.props.numCols;

    const table = [];

    // Create rows
    for (let r = 0; r < rows; r++) {
      const row = [];
      // Create cells
      for (let c = 0; c < cols; c++) {
        row.push(<Cell key={`${r},${c}`} isAlive={this.props.board[r][c]} row={r} column={c} />);
      }

      // Create the parent and add the children
      table.push(<tr key={`${r}`}>{row}</tr>);
    }

    return table;
  }

  handleEvent = (event) => {
    console.log(event.type);

    if (!this.props.simulationIsRunning) {
      if (event.type === 'mousedown') {
        if (event.target.tagName === 'TD') {
          this.setState({ isMouseDown: true });

          const row = Number(event.target.getAttribute('data-row'));
          const column = Number(event.target.getAttribute('data-column'));

          this.props.actions.toggleCell(row, column);
        }
      }

      if (event.type === 'mouseover') {
        if (event.target.tagName === 'TD' && this.state.isMouseDown) {
          const row = Number(event.target.getAttribute('data-row'));
          const column = Number(event.target.getAttribute('data-column'));

          this.props.actions.toggleCell(row, column);
        } else if (event.target.tagName === 'TABLE' && this.state.isMouseDown) {
          this.setState({ isMouseDown: false });
        }
      }

      if (event.type === 'mouseup') {
        this.setState({ isMouseDown: false });
      }
    }

    return false;
  }

  render() {
    return (
      <table className="board m-auto" onMouseDown={this.handleEvent} onMouseUp={this.handleEvent} onMouseOver={this.handleEvent} onDragStart={e => e.preventDefault()} >
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
  simulationIsRunning: PropTypes.bool.isRequired,
};

export default Board;
