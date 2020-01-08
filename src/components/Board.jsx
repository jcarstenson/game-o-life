/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

class Board extends React.Component {
  state = {
    isMouseDown: false,
    enableCells: null,
    cellsToChange: null,
  }

  handleMouseEvents = (event) => {
    if (!this.props.simulationIsRunning) {
      if (event.type === 'mousedown') {
        if (event.target.tagName === 'TD') {
          const enableCells = !event.target.classList.contains('cell-alive');

          const row = Number(event.target.getAttribute('data-row'));
          const column = Number(event.target.getAttribute('data-column'));

          this.setState({
            isMouseDown: true,
            enableCells,
            cellsToChange: [{ row, column }],
          });

          if (enableCells) {
            event.target.classList.add('cell-alive');
          } else {
            event.target.classList.remove('cell-alive');
          }
        }
      }

      if (event.type === 'mouseover') {
        if (event.target.tagName === 'TD' && this.state.isMouseDown) {
          const row = Number(event.target.getAttribute('data-row'));
          const column = Number(event.target.getAttribute('data-column'));

          this.setState({
            ...this.state,
            cellsToChange: [...this.state.cellsToChange, { row, column }],
          });

          if (this.state.enableCells) {
            event.target.classList.add('cell-alive');
          } else {
            event.target.classList.remove('cell-alive');
          }
        }
      }

      if (event.type === 'mouseout') {
        if ((event.relatedTarget.tagName === null || event.relatedTarget.tagName !== 'TD') && this.state.isMouseDown) {
          this.saveCellChanges();
        }
      }

      if (event.type === 'mouseup') {
        this.saveCellChanges();
      }
    }

    return false;
  }

  saveCellChanges() {
    this.props.actions.updateCells(this.state.enableCells, this.state.cellsToChange);

    this.setState({
      isMouseDown: false,
      enableCells: null,
      cellsToChange: null,
    });
  }

  renderCells = () =>
    this.props.board.map((rowArray, row) => (
      <tr key={row}>
        {rowArray.map((cell, column) => (
          <Cell key={`${row},${column}`} isAlive={cell} row={row} column={column} />
        ))}
      </tr>
    ));

  render() {
    return (
      <table
        className="board m-auto" onDragStart={e => e.preventDefault()}
        onMouseDown={this.handleMouseEvents} onMouseUp={this.handleMouseEvents}
        onMouseOver={this.handleMouseEvents} onMouseOut={this.handleMouseEvents}
      >
        <tbody>
          {this.renderCells()}
        </tbody>
      </table>
    );
  }
}

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)).isRequired,
  actions: PropTypes.shape({
    updateCells: PropTypes.func.isRequired,
  }).isRequired,
  simulationIsRunning: PropTypes.bool.isRequired,
};

export default Board;
