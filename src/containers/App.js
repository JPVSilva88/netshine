/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setData, changeDate } from '../actions/';
import Main from '../components/App';

class App extends Component {
  render() {
    return <Main {...this.props}/>;
  }
}

function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  return state;
}

function mapDispatchToProps(dispatch) {
  const actions = { setData, changeDate };
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
