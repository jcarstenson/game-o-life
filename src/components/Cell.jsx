import React from 'react';
import PropTypes from 'prop-types';

const Cell = props => (
  <td className={props.isAlive ? 'cell cell-alive' : 'cell'} onClick={props.handleClick} />
);

Cell.propTypes = {
  isAlive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Cell;
