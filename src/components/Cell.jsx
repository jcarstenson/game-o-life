import React from 'react';
import PropTypes from 'prop-types';

const Cell = props => (
  <td className={props.isAlive ? 'cell cell-alive' : 'cell'} data-row={props.row} data-column={props.column} draggable={false} />
);

Cell.propTypes = {
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  isAlive: PropTypes.bool.isRequired,
};

export default Cell;
