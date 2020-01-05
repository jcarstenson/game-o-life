import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Game from '../components/Game';
import * as actions from '../actions/actions';

const mapStateToProps = state => ({ game: state.game });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
