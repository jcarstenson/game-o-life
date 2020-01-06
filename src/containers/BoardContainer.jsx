import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import Board from '../components/Board';

const mapStateToProps = state => ({
  numRows: state.game.numRows,
  numCols: state.game.numCols,
  board: state.game.board,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
