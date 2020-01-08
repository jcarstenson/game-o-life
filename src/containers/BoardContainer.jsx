import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import Board from '../components/Board';

const mapStateToProps = state => ({
  board: state.game.board,
  simulationIsRunning: state.game.simulationIsRunning,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
