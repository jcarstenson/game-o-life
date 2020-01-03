import React from 'react';
import PropTypes from 'prop-types';

const Cell = props => (
  <td className={props.isAlive ? 'cell cell-alive' : 'cell'} />
);

Cell.propTypes = {
  isAlive: PropTypes.bool.isRequired,
};

export default Cell;
